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

export default function isLowerCase(str: string) {
  if (typeof str !== 'string') {
    return throwError(str, 'string');
  }
  return str !== str.toUpperCase() && str === str.toLowerCase();
}
