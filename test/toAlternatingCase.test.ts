import { toAlternatingCase } from '../src/index';

describe('toAlternatingCase', () => {
  it('changes a string to alternate case', () => {
    expect(toAlternatingCase('hello world')).toEqual('HELLO WORLD');
  });

  it('changes a string to alternate case', () => {
    expect(toAlternatingCase('HELLO WORLD')).toEqual('hello world');
  });

  it('changes a string to alternate case', () => {
    expect(toAlternatingCase('hello WORLD')).toEqual('HELLO world');
  });

  it('changes a string to alternate case', () => {
    expect(toAlternatingCase('HELLO world')).toEqual('hello WORLD');
  });

  it('changes a string to alternate case', () => {
    expect(toAlternatingCase('HeLLo WoRLD')).toEqual('hEllO wOrld');
  });

  it('changes a string to alternate case', () => {
    expect(toAlternatingCase('12345')).toEqual('12345');
  });

  it('changes a string to alternate case', () => {
    expect(toAlternatingCase('1a2b3c4d5e')).toEqual('1A2B3C4D5E');
  });

  it('changes a string to alternate case', () => {
    expect(toAlternatingCase(toAlternatingCase('Hello World'))).toEqual(
      'Hello World'
    );
  });
});
