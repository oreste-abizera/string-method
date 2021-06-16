/**
 *
 * @param str1 first string.
 * @param str2 second string.
 * @returns boolean
 * @description checks wether the first string equals to the second string but ignoring the cases.
 *
 * @example```javascript
 * console.log(areEqualIgnoreCase("user","use")) //false
 * console.log(areEqualIgnoreCase("user","User")) //true
 * ```
 */
export default function areEqualIgnoreCase(str1: string, str2: string) {
  return str1.toLowerCase() === str2.toLowerCase();
}
