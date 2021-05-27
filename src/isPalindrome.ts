import { throwError } from './utils/Error';

export function isPalindrome(str: string, separator: string = ' ') {
  if (typeof str !== 'string') {
    return throwError(str, 'string');
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
