export default function countVowels(str: string){
    
    return Array.from(str).filter(letter => 'aeiou'.includes(letter)).length;
}