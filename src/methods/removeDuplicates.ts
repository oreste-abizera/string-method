/**
 *
 * @param str provided string.
 * @returns string
 * @description removes duplicate words from a string.
 *
 * @example```javascript
 * console.log(removeDuplicates('print print hello')) //print hello
 * console.log(removeDuplicates('hello')) //hello
 *
 * ```
 */

import { throwError } from '../utils/Error';

export default function removeDuplicates(str: string): string {
  if (typeof str !== 'string') {
    return throwError(str, 'string');
  }
  if (!str) return '';

  return [...new Set(str.split(' '))].join(' ');
}
