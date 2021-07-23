/**
 *
 * @param str provided string.
 * @returns boolean
 * @description checks whether a string is empty or not.
 *
 * @example```javascript
 * console.log(isEmpty('')) //true
 * console.log(isEmpty('hello')) //false
 *
 * ```
 */

import { throwError } from '../utils/Error';

export default function isEmpty(str: string): boolean {
  if (typeof str !== 'string') {
    throwError(str, 'string');
    return false;
  }

  return str.length === 0;
}
