import changeCase from '../utils/changeCase';

/**
 *
 * @param str provided string.
 * @returns string
 * @description changes a string to alternate case
 *
 * @example```javascript
 * console.log(toAlternatingCase('hello world')) //HELLO WORLD
 * console.log(toAlternatingCase('hello WORLD')) //HELLO world
 * console.log(toAlternatingCase('1a2b3c4d5e')) //1A2B3C4D5E
 *
 * ```
 */

export default function toAlternatingCase(str: string) {
  return str
    .split('')
    .map(char => changeCase(char))
    .join('');
}
