export default function changeCase(char: string): string {
  return char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase();
}
