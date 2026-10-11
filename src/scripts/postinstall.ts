#!/usr/bin/env node
import { helpCommand } from "../commands/index.js";
import { COLOR_MAP, COLOR_RESET } from "../constants/color.js";

console.log(
  `${COLOR_MAP.green}>> Sayback installed successfully!${COLOR_RESET}`
);
helpCommand();
