import { toCamelCase } from '../src/index';

describe('toCamelCase', () => {
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

  it('converts to camelcase', () => {
    expect(toCamelCase('to-camel_case')).toEqual('toCamelCase');
  });

  it('converts to camelcase', () => {
    expect(toCamelCase('to-camel_case case')).toEqual('toCamelCaseCase');
  });
});
