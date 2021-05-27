import { isUpperCase } from '../src/index';

describe('isUpperCase', () => {
  it('checks uppercase', () => {
    expect(isUpperCase('mY sTring')).toEqual(false);
  });

  it('checks uppercase', () => {
    expect(isUpperCase('MY STRING')).toEqual(true);
  });

  it('checks uppercase', () => {
    expect(isUpperCase('my string')).toEqual(false);
  });
});
