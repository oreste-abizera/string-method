import { countVowels } from '../src/index';

describe('countVowels', () => {
  it('counts vowels in a string', () => {
    expect(countVowels('string1')).toEqual(1);
  });
  it('counts vowels in a string', () => {
    expect(countVowels('stringaa')).toEqual(3);
  });
  it('counts vowels in a string', () => {
    expect(countVowels('strng')).toEqual(0);
  });
});
