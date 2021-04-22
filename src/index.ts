export const capitalize = (str: string) => {
  if (str.length < 0) {
    return str;
  }

  return str
    .trim()
    .toLowerCase()
    .replace(/\w\S*/g, w => w.replace(/^\w/, c => c.toUpperCase()));
};

export const reverse = (str: string) => {
  return str
    .trim()
    .split('')
    .reverse()
    .join('');
};

export const isUpperCase = (str: string) => {
  return str === str.toUpperCase() && str !== str.toLowerCase();
};

export const isLowerCase = (str: string) => {
  return str !== str.toUpperCase() && str === str.toLowerCase();
};

export const toCamelCase = (str: string) => {
  const symbols = ['-', '_'];
  str = isUpperCase(str)
    ? str.trim()
    : str.trim().replace(/^\w/, c => c.toLowerCase());

  for (let i = 0; i < symbols.length; i++) {
    let current = str.split(symbols[i]);
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
};
