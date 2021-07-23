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

export default function isUpperCase(str: string): boolean {
  if (typeof str !== 'string') {
    throwError(str, 'string');
    return false;
  }

  return str === str.toUpperCase() && str !== str.toLowerCase();
}
