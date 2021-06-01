import { isUpperCase } from './isUpperCase';
import { throwError } from './utils/Error';

function splitMulti(str: string, tokens: Array<string>) {
  var tempChar = tokens[0]; // We can use the first token as a temporary join character
  let result: Array<string>;
  for (var i = 1; i < tokens.length; i++) {
    str = str.split(tokens[i]).join(tempChar);
  }
  result = str.split(tempChar);
  return result;
}

export function toCamelCase(str: string) {
  if (typeof str !== 'string') {
    return throwError(str, 'string');
  }
  const symbols: Array<string> = ['-', '_', ' '];
  str = isUpperCase(str)
    ? str.trim()
    : str.trim().replace(/^\w/, c => c.toLowerCase());

  let current: Array<string> = splitMulti(str, symbols);
  if (current.length > 1) {
    current.forEach((element, index) => {
      element = element.toLowerCase();

      current[index] =
        index === 0 ? element : element.replace(/^\w/, c => c.toUpperCase());
    });
    str = current.join('');
  }
  return str;
}
