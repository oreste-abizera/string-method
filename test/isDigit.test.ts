import { isDigit } from '../src/index';

describe('isDigit', () => {
  it('checks whether all string characters are digits', () => {
    expect(isDigit('')).toEqual(false);
  });
  it('checks whether all string characters are digits', () => {
    expect(isDigit('hello')).toEqual(false);
  });
  it('checks whether all string characters are digits', () => {
    expect(isDigit('hello123')).toEqual(false);
  });
  it('checks whether all string characters are digits', () => {
    expect(isDigit('123 ')).toEqual(false);
  });
  it('checks whether all string characters are digits', () => {
    expect(isDigit('     ')).toEqual(false);
  });
  it('checks whether all string characters are digits', () => {
    expect(isDigit('123')).toEqual(true);
  });
});
