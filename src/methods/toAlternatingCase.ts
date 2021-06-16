import changeCase from '../utils/changeCase';

export default function toAlternatingCase(str: string) {
  return str
    .split('')
    .map(char => changeCase(char))
    .join('');
}
