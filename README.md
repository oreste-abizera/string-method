# string-method V0.1.12

The [string-method](https://github.com/oreste-abizera/string-method) library provides access to string properties and methods that are not available for the native string in javascript.

## Installation

Using npm:

```shell
$ npm i -g string-method
$ npm i string-method
```

Note: add `--save` if you are using npm < 5.0.0

Using yarn:

```shell
$ yarn global add string-method
$ yarn add string-method
```

Usage:

```js
const { capitalize } = require('string-method');

// call a method from module
console.log(capitalize('my sTring')); //My String
```

or import one method individually

```js
const toCamelCase = require('string-method/toCamelCase');

// call a method from module
console.log(toCamelCase('to-camel-case')); //toCamelCase
```

## Available Methods

| Method                  | Description                                                                                                                           |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `capitalize`            | changes the first letter of all words in string to upper case and the rest in lower case                                              |
| `reverse`               | reverses the order of the characters in a string                                                                                      |
| `reverseWord`           | reverses the order of the words in a string                                                                                           |
| `isUpperCase`           | checks if a word is in upper case                                                                                                     |
| `isLowerCase`           | checks if a word is in lower case                                                                                                     |
| `toCamelCase`           | changes a word in any order to camel case notation                                                                                    |
| `isPalindrome`          | checks if a string is the same in reverse order                                                                                       |
| `areEqual`              | checks if two strings are equal                                                                                                       |
| `areEqualIgnoreCase`    | checks if two strings are equal but ignoring the case                                                                                 |
| `compareMany`           | compares any number of strings passed as parameters. Returns true if they are equal otherwise false is returned                       |
| `compareManyIgnoreCase` | compares any number of strings passed as parameters but ignoring the case. Returns true if they are equal otherwise false is returned |
| `contains`              | checks if a string contains another string                                                                                            |
| `count`                 | checks the number of times a specified value occurs in a string                                                                       |
| `countCharacters`       | returns occurences of each character in a                                                                                             |
| string                  |
| `countRepetitions`      | returns letters of a string with its repetition times                                                                                 |
| `isEmpty`               | checks whether a string is empty or not                                                                                               |
| `slugify`               | makes a slug from a string                                                                                                            |
| `removeDuplicates`      | removes duplicate words from a string                                                                                                 |
| `isSpace`               | checks whether all string characters are spaces                                                                                       |
| `isDigit`               | checks whether all string characters are digits                                                                                       |
| `isAlpha`               | checks whether all string characters are alphabetical characters                                                                      |
| `isAlphaNumeric`        | checks whether all string characters are alphanumeric characters                                                                      |
| `longestCombination`    | returns longest possible sorted combination of strings containing distinct letters in lowercase                                       |
| `toAlternatingCase`     | returns a new string with each lowercase letter changed to uppercase and each uppercase letter changed to lowercase                   |
| `hasSpaces`             | returns true if a string contains one or more spaces otherwise it returns false                                                       |
| `countWords`            | returns number of words in a string                                                                                                   |
| `countConsonants`       | returns number of consonants in a provided string                                                                                     |
| `countVowels`           | returns number of vowels in a provided string                                                                                         |
| `startsWith`            | returns true if the first string starts with the provided second string otherwise returns false                                       |
| `countSpaces`           | returns the number of spaces in a string                                                                                              |

We are adding others day by day.

## Development

Visit our github repository [here](https://github.com/oreste-abizera/string-method). Any suggestion or improvement on this library is welcome.
