export function parseMessage(args: string[]): string {
  return args.find((arg) => !arg.startsWith("--")) ?? "(empty msg)";
}
