export default function longestCombination(...params: Array<string>) {
  return [...new Set(params.join('').toLowerCase())].sort().join('');
}
