export default function changeCase(char: string) {
  return char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase();
}
