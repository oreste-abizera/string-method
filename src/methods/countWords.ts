/**
 * 
 * @param str whose to check words.
 * @returns number of words in provided string.
 */
export default function countWords(str: string){
    return str.split(' ').length;
}