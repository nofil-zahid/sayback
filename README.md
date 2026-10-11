# Sayback

Sayback is a small command-line tool that animates a message in the terminal, revealing its letters one at a time. Adjust the typing speed, add terminal color, convert the message to uppercase, or replay it multiple times.

## What It Does

Sayback is useful for adding a simple typewriter-style effect to a terminal message. It is a standalone CLI project written in TypeScript and runs on Node.js. The animation is printed in place with a `>>` prompt, so each character appears progressively rather than as a single line of text.

The current implementation is intended for ASCII letters, spaces, and supported ASCII punctuation. Digits and non-ASCII characters are not currently animated correctly.

## Requirements

- Node.js 22 or newer
- npm

## Get Started

Clone the repository, install its dependencies, and compile the TypeScript source:

```sh
git clone https://github.com/nofil-zahid/sayback.git
cd sayback
npm ci
npm run build
```

Run Sayback from the project directory:

```sh
node dist/index.js "Hello World"
```

To use the `sayback` command directly while developing locally, link the project after building it:

```sh
npm link
sayback "Hello World"
```

## Usage

```text
sayback <message> [options]
```

The message should be quoted when it contains spaces. Options can be combined:

```sh
sayback "Hello World" --delay=50 --color=cyan --uppercase --repeat=2
```

| Option | Description | Default |
| --- | --- | --- |
| `--delay=<number>` | Milliseconds to wait between animation steps. Must be zero or greater. | `100` |
| `--color=<color>` | Color the animation in the terminal. Supported values: `red`, `green`, `blue`, `yellow`, `cyan`. | No color |
| `--repeat=<number>` | Number of times to animate the message. Must be at least `1`. | `1` |
| `--uppercase` | Convert the message to uppercase before animating it. | Off |
| `--help`, `-h`, or `help` | Print the usage guide. | |

Examples:

```sh
# Use the default animation speed
sayback "Hello World"

# Animate more quickly
sayback "Hello World" --delay=25

# Add terminal color
sayback "Hello World" --color=green

# Repeat the message three times
sayback "Hello World" --repeat=3

# Combine options
sayback "Hello World" --delay=50 --color=cyan --uppercase --repeat=2

# Show help
sayback --help
```

Colors use ANSI terminal escape codes, so their appearance depends on the terminal being used.

## Development

Install dependencies before running the project scripts:

```sh
npm ci
```

Build the project into `dist/`:

```sh
npm run build
```

Run the program directly from TypeScript in watch mode:

```sh
npm run dev -- "Hello World" --delay=50
```

Run the configured test command:

```sh
npm test
```

The test command builds the project and invokes Node.js's test runner for compiled tests. The `tests/` directory is currently empty, so no test cases are discovered yet.

## Project Layout

```text
src/
	arguments/    Parse CLI messages, options, and flags
	commands/     Help output and the message animation
	constants/    Colors, character ranges, and output prefix
	utils/        Terminal printing and delay helpers
	validators/   Character validation
tests/          Automated tests (to be added)
```

## Continuous Integration and Publishing

GitHub Actions runs the build and test command on branch pushes and on pull requests targeting `main` or `development`. After a successful push to `main`, CI uploads the compiled package as an artifact. The publish workflow waits for that CI run and publishes the package to npm; pull requests and unsuccessful CI runs do not publish. Publishing requires an `NPM_TOKEN` secret configured in the repository's GitHub Actions settings.

## Contributing

Contributions are welcome. To propose a change:

1. Fork [the repository](https://github.com/nofil-zahid/sayback) on GitHub.
2. Clone your fork and create a branch for your change:

	```sh
	git clone https://github.com/<your-github-username>/sayback.git
	cd sayback
	git switch -c describe-your-change
	```

3. Install dependencies with `npm ci`.
4. Make a focused change. Add or update tests when changing behavior.
5. Run `npm run build` and `npm test`.
6. Push your branch to your fork and open a pull request against this repository's `development` branch. Include what changed and how you verified it.

For larger changes or behavior questions, open a [GitHub issue](https://github.com/nofil-zahid/sayback/issues) first so the approach can be discussed before implementation.
