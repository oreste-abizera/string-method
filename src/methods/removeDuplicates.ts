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

export default function removeDuplicates(str: string) {
  return [...new Set(str.split(' '))].join(' ');
}
