import isCharacterAlphaNumeric from '../utils/isCharacterAlphaNumeric';

/**
 *
 * @param str provided string.
 * @returns boolean
 * @description checks whether all string characters are alphanumeric characters.
 *
 * @example```javascript
 * console.log(isAlphaNumeric('')) //false
 * console.log(isAlphaNumeric('hello')) //true
 * console.log(isAlphaNumeric('hello123')) //true
 * console.log(isAlphaNumeric('hello ')) //false
 * ```
 */
export default function isAlphaNumeric(str: string) {
  let AlphaNumericFound = false;
  let nonAlphaNumericFound = true;
  for (const character of str) {
    if (isCharacterAlphaNumeric(character)) AlphaNumericFound = true;
    else nonAlphaNumericFound = false;
  }

  return AlphaNumericFound && nonAlphaNumericFound;
}
