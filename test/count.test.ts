import { count } from '../src/index';

describe('count', () => {
  it('checks the number of times a specified value occurs in a string', () => {
    expect(count('number of times', 'of')).toEqual(1);
  });
  it('checks the number of times a specified value occurs in a string', () => {
    expect(count('number of times', ' ')).toEqual(2);
  });
});
