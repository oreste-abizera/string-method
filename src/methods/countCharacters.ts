interface Count {
  [key: string]: number;
}

/**
 *
 * @param str provided string.
 * @returns object
 * @description checks occurences of each character in a string.
 *
 * @example```javascript
 * console.log(countCharacters('oreste')) //{ o: 1, r: 1, e: 2, s: 1, t: 1 }
 * console.log(countCharacters('ooo')) //{ o: 3 }
 * ```
 */

export default function countCharacters(str: string) {
  let count: Count = {};
  str.split('').forEach(char => {
    count[char] = count[char] ? count[char] + 1 : 1;
  });
  return count;
}
