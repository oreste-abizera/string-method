export function capitalize(str: string) {
  if (typeof str !== 'string') {
    return throwError(str,'string');
  }
  if (str.length < 0) {
    return str;
  }

  return str
    .trim()
    .toLowerCase()
    .replace(/\w\S*/g, w => w.replace(/^\w/, c => c.toUpperCase()));
}

export function reverse(str: string, separator:string = '') {
  if (typeof str !== 'string') {
    return throwError(str,'string');
  }
  return str
    .trim()
    .split(separator)
    .reverse()
    .join(separator);
}

export function reverseWord(str: string, separator: string = ' ') {
  if (typeof str !== 'string') {
    return throwError(str,'string');
  }
  return str
    .trim()
    .split(separator)
    .reverse()
    .join(separator);
}

export function isUpperCase(str: string) {
  if (typeof str !== 'string') {
    return throwError(str,'string');
  }
  return str === str.toUpperCase() && str !== str.toLowerCase();
}

export function isLowerCase(str: string) {
  if (typeof str !== 'string') {
    return throwError(str,'string');
  }
  return str !== str.toUpperCase() && str === str.toLowerCase();
}

export function toCamelCase(str: string) {
  if (typeof str !== 'string') {
    return throwError(str,'string');
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

export function isPalindrome(str: string, separator:string = ' ') {
  if (typeof str !== 'string') {
    return throwError(str,'string');
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

export function areEqual(str1: string, str2: string) {
  return str1 === str2;
}

export function areEqualIgnoreCase(str1: string, str2: string) {
  return str1.toLowerCase() === str2.toLowerCase();
}

export function compareMany(...args: any[]) {
  args = [...args];
  if (args.length === 0) return false;
  let equal = true;
  args.forEach(element => {
    if (args[0] !== element) equal = false;
  });
  return equal;
}

export function compareManyIgnoreCase(...args: any[]) {
  args = [...args];
  if (args.length === 0) return false;
  let equal = true;
  args.forEach(element => {
    if (args[0].toLowerCase() !== element.toLowerCase()) equal = false;
  });
  return equal;
}
