import isCharacterALetter from './utils/isCharacterALetter';

export default function isAlpha(str: string) {
  let AlphaFound = false;
  let nonAlphaFound = true;
  for (const character of str) {
    if (isCharacterALetter(character)) AlphaFound = true;
    else nonAlphaFound = false;
  }

  return AlphaFound && nonAlphaFound;
}
