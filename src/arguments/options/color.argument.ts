import { ALLOWED_COLORS } from "../../constants/color.js";
import type { OutputColor } from "../arguments.types.js";

export function parseColor(args: string[]): OutputColor | undefined {
  const argument = args.find((arg) => arg.startsWith("--color="));

  if (!argument) {
    return undefined;
  }

  const color = argument.split("=")[1] as OutputColor;

  if (!ALLOWED_COLORS.includes(color)) {
    throw new Error(
      `Invalid color "${color}". Allowed colors: ${ALLOWED_COLORS.join(", ")}`,
    );
  }

  return color;
}