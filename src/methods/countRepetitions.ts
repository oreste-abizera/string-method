import { throwError } from '../utils/Error';

/**
 *
 * @param str provided string.
 * @returns string
 * @description returns letters of a string with its repetition times.
 *
 * @example```javascript
 * console.log(countRepetitions('userrr')) //1u1s1e3r
 * console.log(countRepetitions('')) //[Empty String]
 * ```
 */

export default function countRepetitions(str: string): string {
  if (typeof str !== 'string') {
    return throwError(str, 'string');
  }
  if (!str) return '';

  let result = '';

  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] !== str[i]) {
      result += `${count}${str[i]}`;
      count = 1;
    } else {
      count++;
    }
  }

  return result;
}
