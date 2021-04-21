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
