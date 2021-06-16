import { throwError } from '../utils/Error';

export default function isUpperCase(str: string) {
  if (typeof str !== 'string') {
    return throwError(str, 'string');
  }
  return str === str.toUpperCase() && str !== str.toLowerCase();
}
