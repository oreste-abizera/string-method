import { isLowerCase } from '../src/index';

describe('isLowerCase', () => {
  it('checks lowercase', () => {
    expect(isLowerCase('mY sTring')).toEqual(false);
  });

  it('checks lowercase', () => {
    expect(isLowerCase('MY STRING')).toEqual(false);
  });

  it('checks lowecase', () => {
    expect(isLowerCase('my string')).toEqual(true);
  });
});
