/**
 *
 * @param str provided string.
 * @returns boolean
 * @description returns true if the provided string contains one or more emojis and else if no emoji is found in the provided string.
 *
 * @example```javascript
 * console.log(containsEmoji("hello world")) //false
 * console.log(containsEmoji("")) //false
 * console.log(containsEmoji("hello 😀")) //true
 * ```
 */
export default function containsEmoji(str: string): boolean {
  const regexExp = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;
  return regexExp.test(str);
}
