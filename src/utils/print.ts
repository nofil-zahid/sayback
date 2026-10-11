import { PREFIX } from "../constants/prefix.js";

export const singleLinePrint = (text: string): void => {
  process.stdout.write('\r' + PREFIX + text);
};
