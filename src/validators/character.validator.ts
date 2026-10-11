import {
  ALLOWED_SPECIAL_CHARACTERS_ASCII_RANGE,
  PROHIBITED_SPECIAL_CHARACTERS_ASCII,
} from "../constants/special-characters.js";

export function validateCharacter(asciiCode: number, character: string): void {
  if (PROHIBITED_SPECIAL_CHARACTERS_ASCII.includes(asciiCode)) {
    throw new Error(`\nThe ${character} character is not allowed`);
  }
}

export function isAllowedSpecialCharacter(asciiCode: number): boolean {
  return ALLOWED_SPECIAL_CHARACTERS_ASCII_RANGE.some(
    ([lower, higher]) => asciiCode >= lower && asciiCode <= higher,
  );
}
