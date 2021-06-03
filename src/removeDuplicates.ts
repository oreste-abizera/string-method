export default function removeDuplicates(str: string) {
  return [...new Set(str.split(' '))].join(' ');
}
