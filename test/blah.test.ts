import { capitalize, sum } from '../src';

describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });

  it('works', () => {
    expect(capitalize('mY sTring')).toEqual('My String');
  });
});
