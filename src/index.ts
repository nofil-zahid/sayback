#!/usr/bin/env node
import { parseArguments } from "./arguments/arguments.parser.js";
import { helpCommand, sayCommand } from "./commands/index.js";

const args: string[] = process.argv.slice(2);

if (args.includes("help") || args.includes("--help") || args.includes("-h")) {
  helpCommand();
  process.exit(0);
}

try {
  const cliArgs = parseArguments(args);
  await sayCommand(cliArgs);
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("An unexpected error occurred.");
  }
  process.exit(1);
}
