import { parseColor } from "./options/color.argument.js";
import { parseDelay } from "./options/delay.argument.js";
import { parseMessage } from "./options/message.argument.js";
import { parseRepeat } from "./options/repeat.argument.js";
import { parseUppercase } from "./flags/uppercase.argument.js";
import type { CliArguments } from "./arguments.types.js";

export function parseArguments(args: string[]): CliArguments {
  return {
    message: parseMessage(args),
    delay: parseDelay(args),
    color: parseColor(args),
    repeat: parseRepeat(args),
    uppercase: parseUppercase(args),
  };
}
