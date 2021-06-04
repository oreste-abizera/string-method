import { longestCombination } from '../src/index';

describe('longestCombination', () => {
  it('checks the sorted longest combination of strings', () => {
    expect(longestCombination('oreste', 'abizera')).toEqual('abeiorstz');
  });
});
