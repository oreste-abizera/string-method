import { capitalize } from '../src/index';

describe('capitalize', () => {
  it('capitalizes a string', () => {
    expect(capitalize('mY sTring')).toEqual('My String');
  });

  it('capitalizes a string', () => {
    expect(capitalize('MY STRING')).toEqual('My String');
  });
});
