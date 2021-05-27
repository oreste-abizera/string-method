import { throwError } from './utils/Error';

export function isLowerCase(str: string) {
  if (typeof str !== 'string') {
    return throwError(str, 'string');
  }
  return str !== str.toUpperCase() && str === str.toLowerCase();
}
