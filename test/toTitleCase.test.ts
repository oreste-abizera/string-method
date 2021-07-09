import { toTitleCase } from '../src/index';

describe('toTitleCase', () => {
  it('converts to title case', () => {
    expect(toTitleCase('the return of john')).toEqual('The Return of John');
  });

  it('converts to title case', () => {
    expect(toTitleCase('THE RETURN OF JOHN')).toEqual('The Return of John');
  });

  it('converts to title case', () => {
    expect(toTitleCase('tHe retuRn OF jOhn')).toEqual('The Return of John');
  });
});
