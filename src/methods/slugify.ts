/**
 *
 * @param str provided string.
 * @returns string
 * @description creates a slug for a string
 *
 * @example```javascript
 * console.log(slugify('my favorite poem')) //my-favorite-poem
 *
 * ```
 */

import { throwError } from '../utils/Error';

export default function slugify(str: string): string {
  if (typeof str !== 'string') {
    return throwError(str, 'string');
  }
  if (!str) return '';

  return str.split(' ').join('-');
}
