export default function isCharacterAlphaNumeric(ch: string): boolean {
  return ch.match(/^[a-z0-9]+$/i) !== null;
}
