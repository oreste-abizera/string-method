import { throwError } from '../utils/Error';

/**
 *
 * @param str provided string.
 * @returns string
 * @description capitalizes the string.
 *
 * @example```javascript
 * console.log(capitalize("mY sTring")) //My String
 * console.log(capitalize("MY STRING","user")) //My String
 * ```
 */
export default function capitalize(str: string): string {
  if (typeof str !== 'string') {
    return throwError(str, 'string');
  }
  if (!str) return '';

  if (str.length < 0) {
    return str;
  }

  return str
    .trim()
    .toLowerCase()
    .replace(/\w\S*/g, w => w.replace(/^\w/, c => c.toUpperCase()));
}
