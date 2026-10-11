const DEFAULT_DELAY = 100;

export function parseDelay(args: string[]): number {
  const argument = args.find((arg) => arg.startsWith("--delay="));

  if (!argument) {
    return DEFAULT_DELAY;
  }

  const value = argument.split("=")[1];
  const delay = Number.parseInt(value ?? "", 10);

  if (Number.isNaN(delay) || delay < 0) {
    throw new Error("Delay must be a positive number.");
  }

  return delay;
}