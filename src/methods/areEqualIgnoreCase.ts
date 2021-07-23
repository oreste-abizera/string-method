import { throwError } from '../utils/Error';

/**
 *
 * @param str1 first string.
 * @param str2 second string.
 * @returns boolean
 * @description checks whether the first string equals to the second string but ignoring the cases.
 *
 * @example```javascript
 * console.log(areEqualIgnoreCase("user","use")) //false
 * console.log(areEqualIgnoreCase("user","User")) //true
 * ```
 */
export default function areEqualIgnoreCase(
  str1: string,
  str2: string
): boolean {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throwError(typeof str1 !== 'string' ? str1 : str2, 'string');
    return false;
  }

  return str1.toLowerCase() === str2.toLowerCase();
}
