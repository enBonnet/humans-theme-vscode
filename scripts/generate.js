const { readFile } = require('fs').promises;
const { join } = require('path');
const { Type, DEFAULT_SCHEMA, load } = require('js-yaml');
const tinycolor = require('tinycolor2');

/**
 * @typedef {Object} TokenColor - Textmate token color.
 * @prop {string} [name] - Optional name.
 * @prop {string[]} scope - Array of scopes.
 * @prop {Record<'foreground'|'background'|'fontStyle',string|undefined>} settings - Textmate token settings.
 *       Note: fontStyle is a space-separated list of any of `italic`, `bold`, `underline`.
 */

/**
 * @typedef {Object} Theme - Parsed theme object.
 * @prop {Record<'base'|'ansi'|'brightOther'|'other', string[]>} human - Human color variables.
 * @prop {Record<string, string|null|undefined>} colors - VSCode color mapping.
 * @prop {TokenColor[]} tokenColors - Textmate token colors.
 */

/**
 * @typedef {(yamlObj: Theme) => Theme} ThemeTransform
 */

const withAlphaType = new Type('!alpha', {
    kind: 'sequence',
    construct: ([hexRGB, alpha]) => hexRGB + alpha,
    represent: ([hexRGB, alpha]) => hexRGB + alpha,
});

const schema = DEFAULT_SCHEMA.extend([withAlphaType]);

/**
 * Create light theme by replacing color references.
 * @type {ThemeTransform}
 */
const transformLight = theme => {
    /** @type {Theme} */
    const light = JSON.parse(JSON.stringify(theme));

    // Check if light colors are defined
    if (!light.human.light) {
        return light; // Return unchanged if no light section
    }

    // Create a mapping from dark colors to light colors
    const colorMap = new Map();

    // Map base colors
    const darkBase = theme.human.base;
    const lightBase = theme.human.light.base;
    for (let i = 0; i < darkBase.length && i < lightBase.length; i++) {
        colorMap.set(darkBase[i], lightBase[i]);
    }

    // Map ANSI colors
    const darkAnsi = theme.human.ansi;
    const lightAnsi = theme.human.light.ansi;
    for (let i = 0; i < darkAnsi.length && i < lightAnsi.length; i++) {
        colorMap.set(darkAnsi[i], lightAnsi[i]);
    }

    // Map brightOther colors
    const darkBrightOther = theme.human.brightOther;
    const lightBrightOther = theme.human.light.brightOther;
    for (let i = 0; i < darkBrightOther.length && i < lightBrightOther.length; i++) {
        colorMap.set(darkBrightOther[i], lightBrightOther[i]);
    }

    // Map other colors
    const darkOther = theme.human.other;
    const lightOther = theme.human.light.other;
    for (let i = 0; i < darkOther.length && i < lightOther.length; i++) {
        colorMap.set(darkOther[i], lightOther[i]);
    }

    // Helper function to replace colors recursively
    const replaceColors = (obj) => {
        if (typeof obj === 'string') {
            // Check if this string is a color that needs to be replaced
            return colorMap.get(obj) || obj;
        } else if (Array.isArray(obj)) {
            return obj.map(replaceColors);
        } else if (obj && typeof obj === 'object') {
            const result = {};
            for (const key in obj) {
                result[key] = replaceColors(obj[key]);
            }
            return result;
        }
        return obj;
    };

    // Replace colors in the colors section
    light.colors = replaceColors(light.colors);

    // Replace colors in tokenColors
    light.tokenColors = replaceColors(light.tokenColors);

    // Update the color palettes
    light.human.base = lightBase;
    light.human.ansi = lightAnsi;
    light.human.brightOther = lightBrightOther;
    light.human.other = lightOther;

    // Update theme metadata
    light.name = light.name + ' Light';
    light.type = 'light';

    return light;
};

module.exports = async () => {
    const yamlFile = await readFile(
        join(__dirname, '..', 'src', 'human.yml'),
        'utf-8'
    );

    /** @type {Theme} */
    const base = load(yamlFile, { schema });

    // Remove nulls and other falsey values from colors
    for (const key of Object.keys(base.colors)) {
        if (!base.colors[key]) {
            delete base.colors[key];
        }
    }

    // Generate light variant if light section exists
    let light = null;

    if (base.human.light) {
        light = transformLight(base);
    }

    return {
        base,
        light,
    };
};
