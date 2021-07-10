/**
 *
 * @param (str1,str2,str3,...) provided string.
 * @returns boolean
 * @description compares many strings ignoring case.
 *
 * @example```javascript
 * console.log(compareManyIgnoreCase('string1', 'string2', 'string3')) //false
 * console.log(compareManyIgnoreCase('String1', 'string1', 'string1')) //true
 * ```
 */

export default function compareManyIgnoreCase(...args: any[]): boolean {
  args = [...args];
  if (args.length === 0) return false;
  let equal = true;
  args.forEach(element => {
    if (args[0].toLowerCase() !== element.toLowerCase()) equal = false;
  });
  return equal;
}
