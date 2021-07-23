import { removeSpaces } from '../src/index';

describe('removeSpaces', () => {
  it('removes spaces from a string', () => {
    expect(removeSpaces(' t od a y ')).toEqual('today');
  });

  it('removes spaces from a string', () => {
    expect(removeSpaces('   😀   😁    😂   ')).toEqual('😀😁😂');
  });

  it('removes spaces from a string', () => {
    expect(removeSpaces('   ')).toEqual('');
  });
});
