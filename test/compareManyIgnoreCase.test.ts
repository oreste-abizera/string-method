import { compareManyIgnoreCase } from '../src/index';

describe('compareManyIgnoreCase', () => {
  it('compares many strings ignoring the case', () => {
    expect(compareManyIgnoreCase('string1', 'string2', 'string3')).toEqual(
      false
    );
  });
  it('compares many strings ignoring the case', () => {
    expect(compareManyIgnoreCase('string1', 'string1', 'string1')).toEqual(
      true
    );
  });
  it('compares many strings ignoring the case', () => {
    expect(compareManyIgnoreCase('String1', 'string1', 'string1')).toEqual(
      true
    );
  });
});
