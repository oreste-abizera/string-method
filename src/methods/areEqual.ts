/**
 *
 * @param str1 first string.
 * @param str2 second string.
 * @returns boolean
 * @description checks wether the first string equals to the second string.
 *
 * @example```javascript
 * console.log(areEqual("user","use")) //false
 * console.log(areEqual("user","user")) //true
 * ```
 */
export default function areEqual(str1: string, str2: string) {
  return str1 === str2;
}
