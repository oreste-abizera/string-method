import { throwError } from '../utils/Error';

/**
 *
 * @param str provided string.
 * @returns string
 * @description reverses a string
 *
 * @example```javascript
 * console.log(reverse('str║ing')) //gni║rts
 * console.log(reverse('s_t_r_i_n_g', '_')) //g_n_i_r_t_s
 *
 * ```
 */

export default function reverse(str: string, separator: string = ''): string {
  if (typeof str !== 'string') {
    return throwError(str, 'string');
  }
  if (!str) return '';

  return str
    .trim()
    .split(separator)
    .reverse()
    .join(separator);
}
