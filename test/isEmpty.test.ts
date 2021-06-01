import { isEmpty } from '../src/index';

describe('isEmpty', () => {
  it('checks whether a string is empty or nor', () => {
    expect(isEmpty('')).toEqual(true);
  });
  it('checks whether a string is empty or nor', () => {
    expect(isEmpty('hello')).toEqual(false);
  });
});
