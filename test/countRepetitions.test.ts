import { countRepetitions } from '../src/index';

describe('countRepetitions', () => {
  it('returns letters of a string with its repetition times', () => {
    expect(countRepetitions('userrr')).toEqual('1u1s1e3r');
  });
  it('returns letters of a string with its repetition times', () => {
    expect(countRepetitions('')).toEqual('');
  });
});
