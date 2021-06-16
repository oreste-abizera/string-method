import countSpaces from './countSpaces';

/**
 *
 * @param str to chech spaces.
 * @returns boolean showing whether provided string has spaces or not.
 */
export default function hasSpaces(str: string) {
  return countSpaces(str) > 0;
}
