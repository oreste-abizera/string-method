/**
 *
 * @param str provided string.
 * @returns number
 * @description returns number of consonants in a string provided.
 *
 * @example```javascript
 * console.log(countConsonants('str')) //3
 * console.log(countConsonants('stringaa')) //5
 * console.log(countConsonants('aiue')) //0
 * ```
 */

export default function countConsonants(str: string) {
  return Array.from(str).filter(letter =>
    'qwrtypsdfghjklzxcvbnm'.includes(letter)
  ).length;
}
