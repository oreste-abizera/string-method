import { startsWith } from '../src/index';

describe('startsWith', () => {
  it('checks first string starts with the second', () => {
    expect(startsWith('manila', 'man')).toEqual(true);
  });
  it('checks first string starts with the second', () => {
    expect(startsWith('data science', 'data')).toEqual(true);
  });
  it('checks first string starts with the second', () => {
    expect(startsWith('manstring', 'String1')).toEqual(false);
  });
});
