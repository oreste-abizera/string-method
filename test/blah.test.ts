import { capitalize, reverse } from '../src';

describe('blah', () => {
  it('works', () => {
    expect(reverse('str║ing')).toEqual('gni║rts');
  });

  it('works', () => {
    expect(capitalize('mY sTring')).toEqual('My String');
  });
});
