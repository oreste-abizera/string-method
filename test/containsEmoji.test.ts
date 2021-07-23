import { containsEmoji } from '../src/index';

describe('containsEmoji', () => {
  it('checks if a string contains emoji', () => {
    expect(containsEmoji('hello world')).toEqual(false);
  });

  it('checks if a string contains emoji', () => {
    expect(containsEmoji('hello 😀')).toEqual(true);
  });

  it('checks if a string contains emoji', () => {
    expect(containsEmoji('   ')).toEqual(false);
  });
});
