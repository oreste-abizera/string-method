import {
  capitalize,
  isLowerCase,
  isPalindrome,
  isUpperCase,
  reverse,
  toCamelCase,
} from '../src';

describe('blah', () => {
  //reverse
  it('works', () => {
    expect(reverse('str║ing')).toEqual('gni║rts');
  });

  //capitalize
  it('works', () => {
    expect(capitalize('mY sTring')).toEqual('My String');
  });

  //isLowerCase
  it('works', () => {
    expect(isLowerCase('mY sTring')).toEqual(false);
  });

  it('works', () => {
    expect(isLowerCase('MY STRING')).toEqual(false);
  });

  it('works', () => {
    expect(isLowerCase('my string')).toEqual(true);
  });

  //isUpperCase
  it('works', () => {
    expect(isUpperCase('mY sTring')).toEqual(false);
  });

  it('works', () => {
    expect(isUpperCase('MY STRING')).toEqual(true);
  });

  it('works', () => {
    expect(isUpperCase('my string')).toEqual(false);
  });

  //toCamelCase
  it('works', () => {
    expect(toCamelCase('PascalCase')).toEqual('pascalCase');
  });

  it('works', () => {
    expect(toCamelCase(' Train-Case')).toEqual('trainCase');
  });

  it('works', () => {
    expect(toCamelCase('MACRO_CASE')).toEqual('macroCase');
  });
  it('works', () => {
    expect(toCamelCase('flatcase')).toEqual('flatcase');
  });

  it('works', () => {
    expect(toCamelCase('kebab-case')).toEqual('kebabCase');
  });

  it('works', () => {
    expect(toCamelCase('snake_case')).toEqual('snakeCase');
  });

  it('works', () => {
    expect(toCamelCase('UPPERCASE')).toEqual('UPPERCASE');
  });

  it('works', () => {
    expect(toCamelCase('camelCase')).toEqual('camelCase');
  });

  //isPalindrome
  it('works', () => {
    expect(isPalindrome('string')).toEqual(false);
  });
  it('works', () => {
    expect(isPalindrome('A Santa Lived As a Devil At NASA')).toEqual(true);
  });
});
