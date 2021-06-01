import { contains } from '../src/index';

describe('contains', () => {
  it('checks substring of string', () => {
    expect(contains('coding is fun', 'is')).toEqual(true);
  });
  it('checks substring of string', () => {
    expect(contains('coding is fun', 'Coding')).toEqual(false);
  });
});
