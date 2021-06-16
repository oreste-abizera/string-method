import { hasSpaces } from '../src/index';

describe('countWords', () => {
  it('checks if a string contain spaces', () => {
    expect(hasSpaces('str')).toEqual(false);
  });
  it('checks if a string contain spaces', () => {
    expect(hasSpaces('hello there')).toEqual(true);
  });
  it('checks if a string contain spaces', () => {
    expect(hasSpaces('data lmn dsad das')).toEqual(true);
  });
});