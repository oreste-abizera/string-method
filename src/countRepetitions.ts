export default function countRepetitions(str: string) {
  let result = '';

  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] !== str[i]) {
      result += `${count}${str[i]}`;
      count = 1;
    } else {
      count++;
    }
  }

  return result;
}
