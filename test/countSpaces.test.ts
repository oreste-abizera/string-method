import { countSpaces } from '../src/index';

describe('countSpaces', () => {
  it('counts spaces in a string', () => {
    expect(countSpaces('str')).toEqual(0);
  });
  it('counts spaces in a string', () => {
    expect(countSpaces('hello there')).toEqual(1);
  });
  it('counts spaces in a string', () => {
    expect(countSpaces('data lmn dsad das')).toEqual(3);
  });
});