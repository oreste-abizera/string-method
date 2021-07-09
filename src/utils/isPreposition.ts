export default function isPreposition(word: string) {
  const prepositions: Array<string> = ['of', 'the'];
  return prepositions.includes(word.toLowerCase());
}
