/**
 *
 * @param str provided string.
 * @returns string
 * @description returns a new string from a provided string without any space.
 *
 * @example```javascript
 * console.log(removeSpaces(" t od a y")) //today
 * console.log(removeSpaces("   😀   😁    😂   ")) //😀😁😂
 * ```
 */
export default function removeSpaces(str: string): string {
  return str.split(' ').join('');
}
