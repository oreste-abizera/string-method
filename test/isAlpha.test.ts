import { isAlpha } from '../src/index';

describe('isAlpha', () => {
  it('checks whether all string characters are alphabetical characters', () => {
    expect(isAlpha('')).toEqual(false);
  });
  it('checks whether all string characters are alphabetical characters', () => {
    expect(isAlpha('hello')).toEqual(true);
  });
  it('checks whether all string characters are alphabetical characters', () => {
    expect(isAlpha('hello ')).toEqual(false);
  });
  it('checks whether all string characters are alphabetical characters', () => {
    expect(isAlpha('hello123')).toEqual(false);
  });
  it('checks whether all string characters are alphabetical characters', () => {
    expect(isAlpha('123')).toEqual(false);
  });
  it('checks whether all string characters are alphabetical characters', () => {
    expect(isAlpha('     ')).toEqual(false);
  });
  it('checks whether all string characters are alphabetical characters', () => {
    expect(isAlpha('username.')).toEqual(false);
  });
});
