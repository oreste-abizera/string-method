export default function isSpace(str: string) {
  let spaceFound = false;
  let nonSpaceFound = true;
  for (const character of str) {
    if (character === ' ') spaceFound = true;
    else nonSpaceFound = false;
  }

  return spaceFound && nonSpaceFound;
}
