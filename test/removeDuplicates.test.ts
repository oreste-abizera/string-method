import { removeDuplicates } from '../src/index';

describe('removeDuplicates', () => {
  it('removes duplicate words from a string', () => {
    expect(removeDuplicates('print print hello')).toEqual('print hello');
  });

  it('removes duplicate words from a string', () => {
    expect(removeDuplicates('hello')).toEqual('hello');
  });
});
