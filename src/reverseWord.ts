import { throwError } from './utils/Error';

export default function reverseWord(str: string, separator: string = ' ') {
  if (typeof str !== 'string') {
    return throwError(str, 'string');
  }
  return str
    .trim()
    .split(separator)
    .reverse()
    .join(separator);
}
