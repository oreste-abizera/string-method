import { throwError } from '../utils/Error';

/**
 *
 * @param str provided string.
 * @returns boolean
 * @description checks whether a string is lowercase.
 *
 * @example```javascript
 * console.log(isLowerCase('mY sTring')) //false
 * console.log(isLowerCase('my string')) //true
 *
 * ```
 */

export default function isLowerCase(str: string): boolean {
  if (typeof str !== 'string') {
    throwError(str, 'string');
    return false;
  }

  return str !== str.toUpperCase() && str === str.toLowerCase();
}
