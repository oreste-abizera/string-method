import { isAlphaNumeric } from '../src/index';

describe('isAlphaNumeric', () => {
  it('checks whether all string characters are alphanumeric characters', () => {
    expect(isAlphaNumeric('')).toEqual(false);
  });
  it('checks whether all string characters are alphanumeric characters', () => {
    expect(isAlphaNumeric('hello')).toEqual(true);
  });
  it('checks whether all string characters are alphanumeric characters', () => {
    expect(isAlphaNumeric('hello ')).toEqual(false);
  });
  it('checks whether all string characters are alphanumeric characters', () => {
    expect(isAlphaNumeric('hello123')).toEqual(true);
  });
  it('checks whether all string characters are alphanumeric characters', () => {
    expect(isAlphaNumeric('123')).toEqual(true);
  });
  it('checks whether all string characters are alphanumeric characters', () => {
    expect(isAlphaNumeric('     ')).toEqual(false);
  });
  it('checks whether all string characters are alphanumeric characters', () => {
    expect(isAlphaNumeric('username.')).toEqual(false);
  });
});
