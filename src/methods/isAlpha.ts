import isCharacterALetter from '../utils/isCharacterALetter';

/**
 *
 * @param str provided string.
 * @returns boolean
 * @description checks whether all string characters are alphabetical characters.
 *
 * @example```javascript
 * console.log(isAlpha('')) //false
 * console.log(isAlpha('hello')) //true
 * console.log(isAlpha('hello123')) //false
 * ```
 */
export default function isAlpha(str: string): boolean {
  let AlphaFound = false;
  let nonAlphaFound = true;
  for (const character of str) {
    if (isCharacterALetter(character)) AlphaFound = true;
    else nonAlphaFound = false;
  }

  return AlphaFound && nonAlphaFound;
}
