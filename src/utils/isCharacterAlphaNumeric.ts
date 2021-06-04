export default function isCharacterAlphaNumeric(ch: string) {
  return ch.match(/^[a-z0-9]+$/i) !== null;
}
