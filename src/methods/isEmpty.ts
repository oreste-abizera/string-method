/**
 *
 * @param str provided string.
 * @returns boolean
 * @description checks whether a string is empty or not.
 *
 * @example```javascript
 * console.log(isEmpty('')) //true
 * console.log(isEmpty('hello')) //false
 *
 * ```
 */

export default function isEmpty(str: string): boolean {
  return str.length === 0;
}
