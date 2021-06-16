import { throwError } from '../utils/Error';

/**
 *
 * @param str provided string.
 * @returns boolean
 * @description checks whether a string is uppercase.
 *
 * @example```javascript
 * console.log(isUpperCase('mY sTring')) //false
 * console.log(isUpperCase('MY STRING')) //true
 *
 * ```
 */

export default function isUpperCase(str: string) {
  if (typeof str !== 'string') {
    return throwError(str, 'string');
  }
  return str === str.toUpperCase() && str !== str.toLowerCase();
}
