import countWords from "./countWords";

export default function countSpaces(str: string){
    return countWords(str)-1
}