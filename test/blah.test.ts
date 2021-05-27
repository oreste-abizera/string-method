import {
  capitalize,
  isEqual,
  isEqualIgnoreCase,
  isLowerCase,
  isPalindrome,
  isUpperCase,
  reverse,
  reverseWord,
  toCamelCase,
} from '../src';

describe('blah', () => {
  //reverse
  it('reverses a string', () => {
    expect(reverse('str║ing')).toEqual('gni║rts');
  });

  //reverseWord
  it('reverses string words', () => {
    expect(reverseWord('Oreste Abizera')).toEqual('Abizera Oreste');
  });

  //capitalize
  it('capitalizes a string', () => {
    expect(capitalize('mY sTring')).toEqual('My String');
  });

  //isLowerCase
  it('checks lowercase', () => {
    expect(isLowerCase('mY sTring')).toEqual(false);
  });

  it('checks lowercase', () => {
    expect(isLowerCase('MY STRING')).toEqual(false);
  });

  it('checks lowecase', () => {
    expect(isLowerCase('my string')).toEqual(true);
  });

  //isUpperCase
  it('checks uppercase', () => {
    expect(isUpperCase('mY sTring')).toEqual(false);
  });

  it('checks uppercase', () => {
    expect(isUpperCase('MY STRING')).toEqual(true);
  });

  it('checks uppercase', () => {
    expect(isUpperCase('my string')).toEqual(false);
  });

  //toCamelCase
  it('converts to camelcase', () => {
    expect(toCamelCase('PascalCase')).toEqual('pascalCase');
  });

  it('converts to camelcase', () => {
    expect(toCamelCase(' Train-Case')).toEqual('trainCase');
  });

  it('converts to camelcase', () => {
    expect(toCamelCase('MACRO_CASE')).toEqual('macroCase');
  });
  it('converts to camelcase', () => {
    expect(toCamelCase('flatcase')).toEqual('flatcase');
  });

  it('converts to camelcase', () => {
    expect(toCamelCase('kebab-case')).toEqual('kebabCase');
  });

  it('converts to camelcase', () => {
    expect(toCamelCase('snake_case')).toEqual('snakeCase');
  });

  it('converts to camelcase', () => {
    expect(toCamelCase('UPPERCASE')).toEqual('UPPERCASE');
  });

  it('converts to camelcase', () => {
    expect(toCamelCase('camelCase')).toEqual('camelCase');
  });

  //isPalindrome
  it('checks palindrome', () => {
    expect(isPalindrome('string')).toEqual(false);
  });
  it('checks palindrome', () => {
    expect(isPalindrome('A Santa Lived As a Devil At NASA')).toEqual(true);
  });
});

describe('equal', () => {
  it('checks equality of strings', () => {
    expect(isEqual('string1', 'String1')).toEqual(false);
  });
  it('checks equality of strings', () => {
    expect(isEqual('string1', 'string1')).toEqual(true);
  });
  it('checks equality of strings', () => {
    expect(isEqual('string', 'String1')).toEqual(false);
  });

  it('checks equality of strings ignoring case', () => {
    expect(isEqualIgnoreCase('string1', 'String1')).toEqual(true);
  });
  it('checks equality of strings ignoring case', () => {
    expect(isEqualIgnoreCase('string1', 'string1')).toEqual(true);
  });
  it('checks equality of strings ignoring case', () => {
    expect(isEqualIgnoreCase('string', 'string1')).toEqual(false);
  });
});
