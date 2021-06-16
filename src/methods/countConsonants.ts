/**
 *
 * @param str to check consonants.
 * @returns returns number of consonants in a string provided.
 */
export default function countConsonants(str: string) {
  return Array.from(str).filter(letter =>
    'qwrtypsdfghjklzxcvbnm'.includes(letter)
  ).length;
}
