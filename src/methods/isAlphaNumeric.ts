import isCharacterAlphaNumeric from '../utils/isCharacterAlphaNumeric';

export default function isAlphaNumeric(str: string) {
  let AlphaNumericFound = false;
  let nonAlphaNumericFound = true;
  for (const character of str) {
    if (isCharacterAlphaNumeric(character)) AlphaNumericFound = true;
    else nonAlphaNumericFound = false;
  }

  return AlphaNumericFound && nonAlphaNumericFound;
}
