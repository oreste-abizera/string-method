export default function splitMulti(str: string, tokens: Array<string>) {
  var tempChar = tokens[0]; // We can use the first token as a temporary join character
  let result: Array<string>;
  for (var i = 1; i < tokens.length; i++) {
    str = str.split(tokens[i]).join(tempChar);
  }
  result = str.split(tempChar);
  return result;
}
