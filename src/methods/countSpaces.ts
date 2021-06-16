import countWords from './countWords';

/**
 *
 * @param str whose words are.
 * @returns number of spaces in a string.
 */
export default function countSpaces(str: string) {
  return countWords(str) - 1;
}
