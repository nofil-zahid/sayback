const HELP_MESSAGE = `
Usage:
  sayback <message> [options]

Commands:
  help                         Show this help message

Options:
  --delay=<number>             Delay between characters (default: 100)
  --color=<color>              Output color
                               Available: red, green, blue, yellow, cyan
  --repeat=<number>            Number of times to repeat the message (default: 1)
  --uppercase                  Convert message to uppercase
  --help                       Show this help message

Examples:
  sayback "Hello World"

  sayback "Hello World" --delay=50

  sayback "Hello World" --color=green

  sayback "Hello World" --uppercase

  sayback "Hello World" --repeat=3

  sayback "Hello World" --delay=50 --color=cyan --uppercase --repeat=2
`;

export function helpCommand(): void {
  console.log(HELP_MESSAGE);
}
