
/**
 * 
 * @param str to check vowels.
 * @returns number of vowels in provided string.
 */
export default function countVowels(str: string){
    return Array.from(str).filter(letter => 'aeiou'.includes(letter)).length;
}