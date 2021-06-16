import { hasSpaces } from '../src/index';

describe('hasSpaces', () => {
  it('checks if a string contains spaces', () => {
    expect(hasSpaces('str')).toEqual(false);
  });
  it('checks if a string contains spaces', () => {
    expect(hasSpaces('hello there')).toEqual(true);
  });
  it('checks if a string contains spaces', () => {
    expect(hasSpaces('data lmn dsad das')).toEqual(true);
  });
});
