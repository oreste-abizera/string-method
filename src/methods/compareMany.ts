/**
 *
 * @param (str1,str2,str3,...) provided string.
 * @returns boolean
 * @description compares many strings.
 *
 * @example```javascript
 * console.log(compareMany('string1', 'string2', 'string3')) //false
 * console.log(compareMany('string1', 'string1', 'string1')) //true
 * ```
 */
export default function compareMany(...args: any[]) {
  args = [...args];
  if (args.length === 0) return false;
  let equal = true;
  args.forEach(element => {
    if (args[0] !== element) equal = false;
  });
  return equal;
}
