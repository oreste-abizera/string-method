import { throwError } from '../utils/Error';

/**
 *
 * @param str provided string.
 * @param separator optional
 * @returns string
 * @description reverses a string words
 *
 * @example```javascript
 * console.log(reverseWord('Oreste Abizera')) //Abizera Oreste
 * console.log(reverseWord('Oreste_Abizera', '_')) //Abizera Oreste
 *
 * ```
 */

export default function reverseWord(
  str: string,
  separator: string = ' '
): string {
  if (typeof str !== 'string') {
    return throwError(str, 'string');
  }
  return str
    .trim()
    .split(separator)
    .reverse()
    .join(separator);
}
