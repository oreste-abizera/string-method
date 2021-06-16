/**
 *
 * @param str1 Bigger string.
 * @param str2 Smaller string to check if contained in  str1.
 * @returns boolean
 * @description checks whether the first string starts with the second.
 *
 * @example```javascript
 * console.log(startsWith('manila', 'man')) //true
 * console.log(startsWith('data science', 'data')) //true
 * console.log(startsWith('manstring', 'String1')) //false
 *
 * ```
 */

export default function startsWith(str1: string, str2: string) {
  return str1.startsWith(str2);
}
