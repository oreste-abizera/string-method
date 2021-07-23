import { throwError } from '../utils/Error';

/**
 *
 * @param str provided string.
 * @param separator optional
 * @returns boolean
 * @description checks whether a string is palindrome.
 *
 * @example```javascript
 * console.log(isPalindrome('string')) //false
 * console.log(isPalindrome('s/t/r/i/n/g', '/')) //false
 * console.log(isPalindrome('A Santa Lived As a Devil At NASA')) //true
 * console.log(isPalindrome('A-Santa-Lived-As-a-Devil-At-NASA', '-')) //true
 *
 * ```
 */

export default function isPalindrome(
  str: string,
  separator: string = ' '
): boolean {
  if (typeof str !== 'string' || typeof separator !== 'string') {
    throwError(typeof str !== 'string' ? str : separator, 'string');
    return false;
  }

  str = str
    .split(separator)
    .join('')
    .toLowerCase();

  let palindrome: boolean = true;
  // find the length of a string
  const len: number = str.length;

  // loop through half of the string
  for (let i: number = 0; i < len / 2; i++) {
    // check if first and last string are same
    if (str[i] !== str[len - 1 - i]) {
      palindrome = false;
    }
  }
  return palindrome;
}
