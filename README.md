# Sayback

<p align="center">
  <strong>An animated typewriter & letter-cycling CLI for your terminal.</strong>
</p>

---

**Sayback** is a lightweight command-line tool that brings your terminal text to life with a retro character-cycling animation. Watch as letters roll through the alphabet and lock into place letter-by-letter. Customize typing speed, terminal colors, case transformations, and repeat cycles.

## ✨ Features

- 🔤 **Dynamic Character Cycling** — Letters tumble through the ASCII alphabet before locking into the target character.
- 🎨 **ANSI Color Palette** — Highlight animations in `cyan`, `green`, `yellow`, `blue`, or `red`.
- ⏱️ **Configurable Speed** — Control the frame delay to create lightning-fast reveals or suspenseful slow typing.
- 🔁 **Repeat Loops** — Replay the animation multiple times seamlessly.
- 🔠 **Case Transformation** — Quick `--uppercase` flag to emphasize your message.
- ⚡ **Zero Runtime Dependencies** — Pure TypeScript / Node.js with zero bloat.

---

## 🚀 Quick Start

Run instantly without installation using **npx**:

```sh
npx sayback "Hello World"
```

Or install globally via **npm**:

```sh
npm install -g sayback
```

Then run `sayback` anywhere in your terminal:

```sh
sayback "Welcome to Sayback!"
```

---

## 📖 Usage

```sh
sayback <message> [options]
```

> **Note:** Enclose multi-word messages in quotes.

### CLI Options

| Option | Shorthand | Type | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `--delay=<ms>` | | `number` | `100` | Milliseconds between character steps (`>= 0`). |
| `--color=<color>` | | `string` | _none_ | ANSI color: `cyan`, `green`, `yellow`, `blue`, `red`. |
| `--repeat=<count>` | | `number` | `1` | Number of times to replay the animation (`>= 1`). |
| `--uppercase` | | `boolean` | `false` | Converts message to uppercase prior to animation. |
| `--help` | `-h`, `help` | `flag` | | Displays the usage and help guide. |

---

## 💡 Examples

### Default Speed & Standard Output
```sh
sayback "Hello World"
```

### Fast Typing Reveal
```sh
sayback "Deploying to production..." --delay=25
```

### Colored Output
```sh
sayback "Build succeeded!" --color=green
```

### Uppercase with Repeat Loop
```sh
sayback "Attention!" --color=yellow --uppercase --repeat=3
```

### All Options Combined
```sh
sayback "Hello Cyberpunk" --delay=40 --color=cyan --uppercase --repeat=2
```

---

## ℹ️ Character Support

Sayback currently animates **standard ASCII letters (a-z, A-Z)**, spaces, and standard ASCII punctuation marks (`!`, `?`, `.`, `,`, etc.). Punctuation marks and spaces render immediately, while letters cycle through ASCII values until reaching the target character. Support for numerical digits and extended UTF-8 characters is planned for upcoming releases.

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
