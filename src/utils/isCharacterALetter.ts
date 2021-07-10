export default function isCharacterALetter(char: string): boolean {
  return /[a-zA-Z]/.test(char);
}
