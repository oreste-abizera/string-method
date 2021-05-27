import { isPalindrome } from '../src/index';

describe('isPalindrome', () => {
  it('checks palindrome', () => {
    expect(isPalindrome('string')).toEqual(false);
    expect(isPalindrome('s/t/r/i/n/g', '/')).toEqual(false);
  });
  it('checks palindrome', () => {
    expect(isPalindrome('A Santa Lived As a Devil At NASA')).toEqual(true);
    expect(isPalindrome('A-Santa-Lived-As-a-Devil-At-NASA', '-')).toEqual(true);
  });
});
