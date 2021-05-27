import { compareMany } from '../src/index';

describe('compareMany', () => {
  it('compares many strings', () => {
    expect(compareMany('string1', 'string2', 'string3')).toEqual(false);
  });
  it('compares many strings', () => {
    expect(compareMany('string1', 'string1', 'string1')).toEqual(true);
  });
  it('compares many strings', () => {
    expect(compareMany('String1', 'string1', 'string1')).toEqual(false);
  });
});
