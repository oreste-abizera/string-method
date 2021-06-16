/**
 *
 * @param str provided string.
 * @returns string
 * @description checks the sorted longest combination of strings.
 *
 * @example```javascript
 * console.log(longestCombination('oreste', 'abizera')) //abeiorstz
 *
 * ```
 */

export default function longestCombination(...params: Array<string>) {
  return [...new Set(params.join('').toLowerCase())].sort().join('');
}
