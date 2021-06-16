import { countWords } from '../src/index';

describe('countWords', () => {
  it('counts words in a string', () => {
    expect(countWords('str')).toEqual(1);
  });
  it('counts words in a string', () => {
    expect(countWords('hello there')).toEqual(2);
  });
  it('counts words in a string', () => {
    expect(countWords('data lmn dsad das')).toEqual(4);
  });
});