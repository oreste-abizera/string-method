import { areEqualIgnoreCase } from '../src/index';

describe('areEqualIgnoreCase', () => {
  it('checks equality of strings ignoring case', () => {
    expect(areEqualIgnoreCase('string1', 'String1')).toEqual(true);
  });
  it('checks equality of strings ignoring case', () => {
    expect(areEqualIgnoreCase('string1', 'string1')).toEqual(true);
  });
  it('checks equality of strings ignoring case', () => {
    expect(areEqualIgnoreCase('string', 'string1')).toEqual(false);
  });
});
