import { areEqual } from '../src/index';

describe('areEqual', () => {
  it('checks equality of strings', () => {
    expect(areEqual('string1', 'String1')).toEqual(false);
  });
  it('checks equality of strings', () => {
    expect(areEqual('string1', 'string1')).toEqual(true);
  });
  it('checks equality of strings', () => {
    expect(areEqual('string', 'String1')).toEqual(false);
  });
});
