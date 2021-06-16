interface Count {
  [key: string]: number;
}
export default function countCharacters(str: string) {
  let count: Count = {};
  str.split('').forEach(char => {
    count[char] = count[char] ? count[char] + 1 : 1;
  });
  return count;
}
