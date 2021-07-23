import { throwError } from '../utils/Error';

/**
 *
 * @param str1 first string.
 * @param str2 second string.
 * @returns boolean
 * @description checks whether the first string equals to the second string.
 *
 * @example```javascript
 * console.log(areEqual("user","use")) //false
 * console.log(areEqual("user","user")) //true
 * ```
 */
export default function areEqual(str1: string, str2: string): boolean {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throwError(typeof str1 !== 'string' ? str1 : str2, 'string');
    return false;
  }

  return str1 === str2;
}
