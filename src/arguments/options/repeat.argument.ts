const DEFAULT_REPEAT = 1;

export function parseRepeat(args: string[]): number {
  const argument = args.find((arg) => arg.startsWith("--repeat="));

  if (!argument) {
    return DEFAULT_REPEAT;
  }

  const value = argument.split("=")[1];
  const repeat = Number.parseInt(value ?? "", 10);

  if (Number.isNaN(repeat) || repeat < 1) {
    throw new Error("Repeat must be a number greater than 0.");
  }

  return repeat;
}
