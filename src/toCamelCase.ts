import { isUpperCase } from './isUpperCase';
import { throwError } from './utils/Error';

export function toCamelCase(str: string) {
  if (typeof str !== 'string') {
    return throwError(str, 'string');
  }
  const symbols: Array<string> = ['-', '_'];
  str = isUpperCase(str)
    ? str.trim()
    : str.trim().replace(/^\w/, c => c.toLowerCase());

  for (let i: number = 0; i < symbols.length; i++) {
    let current: Array<string> = str.split(symbols[i]);
    if (current.length > 1) {
      current.forEach((element, index) => {
        element = element.toLowerCase();

        current[index] =
          index === 0 ? element : element.replace(/^\w/, c => c.toUpperCase());
      });
      str = current.join('');
    }
  }
  return str;
}
