export default function slugify(str: string) {
  return str.split(' ').join('-');
}
