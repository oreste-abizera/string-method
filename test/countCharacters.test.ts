import { countCharacters } from '../src/index';

describe('countCharacters', () => {
  it('checks occurences of each character in a string', () => {
    expect(countCharacters('oreste')).toEqual({ o: 1, r: 1, e: 2, s: 1, t: 1 });
  });
  it('checks occurences of each character in a string', () => {
    expect(countCharacters('ooo')).toEqual({ o: 3 });
  });
});
