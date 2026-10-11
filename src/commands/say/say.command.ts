import type { CliArguments } from "../../arguments/arguments.types.js";
import { CAPITAL_ALPHABET_START_ASCII, SMALL_ALPHABET_START_ASCII } from "../../constants/alphabet-ascii.js";
import { COLOR_MAP, COLOR_RESET } from "../../constants/color.js";
import { isAllowedSpecialCharacter, validateCharacter } from "../../validators/character.validator.js";
import { print, time } from "../../utils/index.js";

function formatText(text: string, color?: CliArguments["color"]): string {
  if (!color || !COLOR_MAP[color]) {
    return text;
  }
  return `${COLOR_MAP[color]}${text}${COLOR_RESET}`;
}

export async function sayCommand(options: CliArguments): Promise<void> {
  const { delay, repeat, color, uppercase } = options;
  const msg = uppercase ? options.message.toUpperCase() : options.message;

  for (let r = 0; r < repeat; r++) {
    let resultantString = "";
    let tempString = "";

    for (let i = 0; i < msg.length; i++) {
      const char = msg[i]!;
      const msgCharAsciiCode = char.charCodeAt(0);

      validateCharacter(msgCharAsciiCode, char);

      if (isAllowedSpecialCharacter(msgCharAsciiCode)) {
        resultantString += char;
        print.singleLinePrint(formatText(resultantString, color));
        continue;
      }

      let startIndex = SMALL_ALPHABET_START_ASCII;

      if (msgCharAsciiCode >= CAPITAL_ALPHABET_START_ASCII) {
        startIndex = CAPITAL_ALPHABET_START_ASCII;
      }

      for (let j = startIndex; j <= msgCharAsciiCode; j++) {
        tempString = String.fromCharCode(j);

        process.stdout.write(formatText(tempString, color));

        await time.sleep(delay);

        print.singleLinePrint(formatText(resultantString, color));
      }

      resultantString += tempString;
    }

    process.stdout.write("\n");
  }
}
