import { throwError } from '../utils/Error';

/**
 *
 * @param str to check vowels.
 * @returns number
 * @description returns number of vowels in provided string.
 *
 * @example```javascript
 * console.log(countVowels('string1')) //1
 * console.log(countVowels('stringaa')) //3
 * console.log(countVowels('strng')) //0
 * ```
 */
export default function countVowels(str: string): number {
  if (typeof str !== 'string') {
    throwError(str, 'string');
    return -1;
  }

  return Array.from(str).filter(letter => 'aeiou'.includes(letter)).length;
}
