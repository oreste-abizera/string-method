/**
 *
 * @param str whose to check words.
 * @returns number
 * @description returns number of words in provided string.
 *
 * @example```javascript
 * console.log(countWords('str')) //1
 * console.log(countWords('hello there')) //2
 * console.log(countWords('data lmn dsad das')) //4
 * ```
 */
export default function countWords(str: string): number {
  return str.split(' ').length;
}
