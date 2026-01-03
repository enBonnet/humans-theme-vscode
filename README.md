<div align="center">
<h1>Human Theme for Visual Studio Code</h1>

[![Version](https://img.shields.io/github/package-json/v/enBonnet/human-theme-vscode?color=e95421&style=for-the-badge&label=VS%20Marketplace)](https://marketplace.visualstudio.com/items?itemName=enbonnet.human-theme)
[![Open VSX Version](https://img.shields.io/static/v1?label=Open%20VSX&message=Download&color=e95421&style=for-the-badge&logo=open-vsx)](https://open-vsx.org/extension/enBonnet/human-theme)
[![Downloads](https://img.shields.io/visual-studio-marketplace/d/enbonnet.human-theme?color=e95421&style=for-the-badge&label=Downloads)](https://marketplace.visualstudio.com/items?itemName=enbonnet.human-theme)

<img src="https://github.com/enBonnet/human-theme-vscode/blob/main/images/icon.png?raw=true" alt="Human Theme for Visual Studio Code" width="200">
</div>

## 📋 Table of Contents

- [✨ Features](#-features)
- [🎨 Preview](#-preview)
- [🚀 Installation](#-installation)
- [🎛️ Using the Theme](#-using-the-theme)
- [🎨 Color Palette](#-color-palette)
- [🛠️ Development](#-development)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [💖 Credits](#-credits)

## ✨ Features

- 🎨 Warm and organic dark theme designed for humanist aesthetics
- 👀 Optimized for long coding sessions with soft contrast
- 🖥️ Supports all major programming languages
- 🌙 Two variants: Standard and Light

## 🔥 The Inspiration

The **Human Theme** is a warm, organic, and approachable VS Code theme. It moves away from clinical, high-contrast aesthetics in favor of earthy tones and vibrant, humanist accents. Featuring energetic oranges (`#e95421` and `#ff8142`) against a deep charcoal background, it provides a "human" touch to the digital workspace.

The goal is to create an environment that feels alive and creative, mirroring the passion and nuance that humans bring to technology.

## 🎨 Preview

### Dark Theme
<div align="center">
<img src="https://github.com/enBonnet/human-theme-vscode/blob/main/images/screenshots/dark.png?raw=true" alt="Human Theme Dark" width="600">
</div>

### Light Theme
<div align="center">
<img src="https://github.com/enBonnet/human-theme-vscode/blob/main/images/screenshots/light.png?raw=true" alt="Human Theme Light" width="600">
</div>

## 🎨 Color Palette

This theme uses a warm, humanist color palette:

| Role | Color Name | Hex |
|------|------------|-----|
| Background | Deep Charcoal | `#191917` |
| Foreground | Off-White | `#f3f3f3` |
| Selection | Bright Orange | `#ff8142` |
| Comments | Burnt Orange | `#e95421` |
| Cyan | Soft Teal | `#50cbc3` |
| Green | Leaf Green | `#8fb04f` |
| Orange | Warm Orange | `#f27e2a` |
| Pink | Soft Rose | `#f09690` |
| Red | Muted Red | `#e85858` |
| Purple | Muted Purple | `#ad7fa8` |
| Yellow | Soft Amber | `#f2c55c` |

### UI Variants

| Variable | Hex | Purpose |
|----------|-----|---------|
| BGDarker | `#302d2b` | Widgets, inputs |
| BGDark | `#151413` | Sidebar, panels |
| BG | `#191917` | Main editor background |
| BGLight | `#20201e` | Mid-tone background |
| BGLighter | `#5a5654` | Hover states/highlights |

### ANSI Terminal Colors

The terminal colors are balanced for both vibrant accents and readability:

| ANSI | Name | Hex | Bright Hex |
|------|------|-----|------------|
| 0/8 | Black | `#1f2328` | `#808080` |
| 1/9 | Red | `#ff8142` | `#ff5e26` |
| 2/10 | Green | `#32cd32` | `#4ee44e` |
| 3/11 | Yellow | `#ffd700` | `#ffeb3b` |
| 4/12 | Blue | `#1e90ff` | `#42a5f5` |
| 5/13 | Magenta | `#ff69b4` | `#ff80ab` |
| 6/14 | Cyan | `#00ced1` | `#4dd0e1` |
| 7/15 | White | `#ffffff` | `#ffffff` |

## 🚀 Installation

### VS Code Marketplace
[![VS Code Marketplace](https://img.shields.io/visual-studio-marketplace/v/enbonnet.human-theme?style=for-the-badge&label=VS%20Code%20Marketplace&color=e95421)](https://marketplace.visualstudio.com/items?itemName=enbonnet.human-theme)

### Open VSX Registry
[![Open VSX Registry](https://img.shields.io/open-vsx/v/enBonnet/human-theme?style=for-the-badge&label=Open%20VSX%20Registry&color=e95421)](https://open-vsx.org/extension/enBonnet/human-theme)

## 🎛️ Using the Theme

1. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`)
2. Type "Preferences: Color" and press Enter
3. Search for "Human"
4. Select either "Human" or "Human Light" from the list

### Recommended Settings

For the best experience, add these to your `settings.json`:

```json
{
  "workbench.colorTheme": "Human",
  "editor.fontFamily": "'Victor Mono', Monaco, Menlo, 'Courier New', monospace",
  "editor.fontSize": 16,
  "editor.lineHeight": 1.5,
  "editor.fontWeight": "600",
  "editor.wordWrap": "on",
}
```

## 🎨 Theme Variants

- **Human** - Standard dark version with warm, humanist accents
- **Human Light** - Clean light version for day-time coding

## 🛠 Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/)

### Setup

```bash
# Install dependencies
pnpm install

# Build the theme
pnpm run build

# Watch for changes and build automatically
pnpm run watch

# Package the extension
pnpm run package
```

### Project Structure

```
├── src/
│   └── human.yml         # Theme source file (YAML)
├── theme/
│   ├── human.json        # Generated theme
│   └── human-light.json
├── scripts/
│   ├── build.js           # Build script
│   └── generate.js        # Theme generator
├── images/
│   └── icon.png           # Extension icon
```

## 🤝 Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to:

1. Open an [issue](https://github.com/enbonnet/human-theme-vscode/issues)
2. Submit a pull request
3. Share your feedback

## 📬 Stay Updated

For updates, star this repository and follow me on [GitHub](https://github.com/enbonnet).

## 💖 Credits

- Inspired by humanist design and organic aesthetics
- Special thanks to the VS Code community for their amazing theming support
- This theme is based on the [Dracula Theme](https://draculatheme.com/) schema, with colors adapted for the Human aesthetic.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
Made with 🔥 by <a href="https://enbonnet.com">Ender Bonnet</a>
</div>
