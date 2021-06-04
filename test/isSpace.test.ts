import { isSpace } from '../src/index';

describe('isSpace', () => {
  it('checks whether all string characters are spaces', () => {
    expect(isSpace('')).toEqual(false);
  });
  it('checks whether all string characters are spaces', () => {
    expect(isSpace('hello')).toEqual(false);
  });
  it('checks whether all string characters are spaces', () => {
    expect(isSpace(' hello ')).toEqual(false);
  });
  it('checks whether all string characters are spaces', () => {
    expect(isSpace(' ')).toEqual(true);
  });
  it('checks whether all string characters are spaces', () => {
    expect(isSpace('     ')).toEqual(true);
  });
});
