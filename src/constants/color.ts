import type { OutputColor } from "../arguments/arguments.types.js";

export const ALLOWED_COLORS: OutputColor[] = [
  "red",
  "green",
  "blue",
  "yellow",
  "cyan",
];

export const COLOR_MAP: Record<OutputColor, string> = {
  red: "\x1b[31m",
  green: "\x1b[32m",
  blue: "\x1b[34m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
};

export const COLOR_RESET = "\x1b[0m";
