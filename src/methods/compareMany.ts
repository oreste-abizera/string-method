export default function compareMany(...args: any[]) {
  args = [...args];
  if (args.length === 0) return false;
  let equal = true;
  args.forEach(element => {
    if (args[0] !== element) equal = false;
  });
  return equal;
}
