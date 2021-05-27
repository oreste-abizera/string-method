import { reverseWord } from '../src/index';

describe('reverseWord', () => {
  it('reverses string words', () => {
    expect(reverseWord('Oreste Abizera')).toEqual('Abizera Oreste');
  });

  it('reverses string words with characters', () => {
    expect(reverseWord('Oreste_Abizera', '_')).toEqual('Abizera_Oreste');
  });
});
