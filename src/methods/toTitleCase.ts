import { throwError } from '../utils/Error';
import isPreposition from '../utils/isPreposition';
import capitalize from './capitalize';

/**
 *
 * @param str provided string.
 * @returns string
 * @description converts a string to title case considering prepositions
 *
 * @example```javascript
 * console.log(toTitleCase('the return of john')) //The Return of John
 * console.log(toTitleCase('THE RETURN OF JOHN')) //The Return of John
 * console.log(toTitleCase('tHe retuRn OF jOhn')) //The Return of John
 *
 * ```
 */

export default function toTitleCase(str: string) {
  if (typeof str !== 'string') {
    return throwError(str, 'string');
  }
  if (!str) return '';

  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (i > 0 && isPreposition(word)) words[i] = words[i].toLowerCase();
    else words[i] = capitalize(word);
  }
  return words.join(' ');
}
