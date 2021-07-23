/**
 *
 * @param str provided string.
 * @param search provided search value.
 * @returns number
 * @description checks the number of times a search occurs in a string.
 *
 * @example```javascript
 * console.log(count('number of times', 'of')) //1
 * console.log(count('number of times', ' ')) //2
 * ```
 */

import { throwError } from '../utils/Error';

export default function count(str: string, search: string): number {
  if (typeof str !== 'string' || typeof search !== 'string') {
    throwError(typeof str !== 'string' ? str : search, 'string');
    return -1;
  }

  let strLen = str.length;
  let searchLen = search.length;
  let res = 0;

  for (let i = 0; i <= strLen - searchLen; i++) {
    let j;
    for (j = 0; j < searchLen; j++) {
      if (str[i + j] !== search[j]) {
        break;
      }
    }

    if (j === searchLen) {
      res++;
      j = 0;
    }
  }

  return res;
}
