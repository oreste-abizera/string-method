/**
 *
 * @param str provided string.
 * @returns boolean
 * @description checks whether all string characters are spaces.
 *
 * @example```javascript
 * console.log(isSpace('')) //false
 * console.log(isSpace('hello')) //false
 * console.log(isSpace(' ')) //true
 * console.log(isSpace('     ')) //true
 *
 * ```
 */

import { throwError } from '../utils/Error';

export default function isSpace(str: string): boolean {
  if (typeof str !== 'string') {
    throwError(str, 'string');
    return false;
  }

  let spaceFound = false;
  let nonSpaceFound = true;
  for (const character of str) {
    if (character === ' ') spaceFound = true;
    else nonSpaceFound = false;
  }

  return spaceFound && nonSpaceFound;
}
