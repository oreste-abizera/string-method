/**
 *
 * @param str provided string.
 * @param substr provided substring.
 * @returns boolean
 * @description checks whether a substring is in the provided string.
 *
 * @example```javascript
 * console.log(contains('coding is fun', 'is')) //true
 * console.log(contains('coding is fun', 'Coding')) //false
 * ```
 */

export default function contains(str: string, substr: string) {
  return str.indexOf(substr) > -1;
}
