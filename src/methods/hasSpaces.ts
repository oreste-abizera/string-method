import { throwError } from '../utils/Error';
import countSpaces from './countSpaces';

/**
 *
 * @param str to chech spaces.
 * @returns boolean
 * @description checks whether provided string has spaces or not.
 *
 * @example```javascript
 * console.log(hasSpaces('str')) //false
 * console.log(hasSpaces('hello there')) //true
 * console.log(hasSpaces('data lmn dsad das')) //true
 * ```
 */
export default function hasSpaces(str: string): boolean {
  if (typeof str !== 'string') {
    throwError(str, 'string');
    return false;
  }

  return countSpaces(str) > 0;
}
