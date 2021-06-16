import countVowels from "./countVowels";
import countWords from "./countWords";

export default function countConsonants(str: string){
    return str.length - countVowels(str) - countWords(str) - 1;
}