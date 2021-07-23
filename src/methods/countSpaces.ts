import { throwError } from '../utils/Error';
import countWords from './countWords';

/**
 *
 * @param str whose words are.
 * @returns number
 * @description returns number of spaces in a string.
 *
 * @example```javascript
 * console.log(countSpaces('str')) //0
 * console.log(countSpaces('hello there')) //1
 * ```
 */
export default function countSpaces(str: string): number {
  if (typeof str !== 'string') {
    throwError(str, 'string');
    return -1;
  }

  return countWords(str) - 1;
}
