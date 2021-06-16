export default function isDigit(str: string) {
  if (str.includes(' ')) return false;
  return !isNaN(parseFloat(str));
}
