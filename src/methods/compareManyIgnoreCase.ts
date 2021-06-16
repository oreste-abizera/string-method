export default function compareManyIgnoreCase(...args: any[]) {
  args = [...args];
  if (args.length === 0) return false;
  let equal = true;
  args.forEach(element => {
    if (args[0].toLowerCase() !== element.toLowerCase()) equal = false;
  });
  return equal;
}
