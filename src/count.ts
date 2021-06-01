export default function count(str: string, search: string) {
  let strLen = str.length;
  let searchLen = search.length;
  let res = 0;

  for (let i = 0; i <= strLen - searchLen; i++) {
    let j;
    for (j = 0; j < searchLen; j++) {
      if (str[i + j] != search[j]) {
        break;
      }
    }

    if (j == searchLen) {
      res++;
      j = 0;
    }
  }

  return res;
}
