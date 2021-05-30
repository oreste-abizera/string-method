import { slugify } from '../src/index';

describe('slugify', () => {
  it('creates a slug for a string', () => {
    expect(slugify('my favorite poem')).toEqual('my-favorite-poem');
  });
});
