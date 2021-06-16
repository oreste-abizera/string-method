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

export default function slugify(str: string) {
  return str.split(' ').join('-');
}
