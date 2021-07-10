export default function isPreposition(word: string): boolean {
  const prepositions: Array<string> = ['of', 'the'];
  return prepositions.includes(word.toLowerCase());
}
