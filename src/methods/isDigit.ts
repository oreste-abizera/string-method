/**
 *
 * @param str provided string.
 * @returns boolean
 * @description checks whether all string characters are digits.
 *
 * @example```javascript
 * console.log(isDigit('')) //false
 * console.log(isDigit('hello')) //false
 * console.log(isDigit('123')) //true
 * console.log(isDigit('hello123')) //false
 * ```
 */
export default function isDigit(str: string): boolean {
  if (str.includes(' ')) return false;
  return !isNaN(parseFloat(str));
}
