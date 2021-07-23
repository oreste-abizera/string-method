/**
 *
 * @param str provided string.
 * @param substr provided substring.
 * @returns boolean
 * @description checks whether a substring is in the provided string.
 *
 * @example```javascript
 * console.log(contains('coding is fun', 'is')) //true
 * console.log(contains('coding is fun', 'Coding')) //false
 * ```
 */

import { throwError } from '../utils/Error';

export default function contains(str: string, substr: string): boolean {
  if (typeof str !== 'string' || typeof substr !== 'string') {
    throwError(typeof str !== 'string' ? str : substr, 'string');
    return false;
  }

  return str.indexOf(substr) > -1;
}
