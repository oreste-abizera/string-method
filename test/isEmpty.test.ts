import { isEmpty } from '../src/index';

describe('isEmpty', () => {
  it('checks whether a string is empty or not', () => {
    expect(isEmpty('')).toEqual(true);
  });
  it('checks whether a string is empty or not', () => {
    expect(isEmpty('hello')).toEqual(false);
  });
});
