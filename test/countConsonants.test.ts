import { countConsonants } from '../src/index';

describe('countConsonants', () => {
  it('counts consonants in a string', () => {
    expect(countConsonants('str')).toEqual(3);
  });
  it('counts consonants in a string', () => {
    expect(countConsonants('stringaa')).toEqual(5);
  });
  it('counts consonants in a string', () => {
    expect(countConsonants('aiue')).toEqual(0);
  });
});