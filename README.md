# string-method V0.1.9

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
| `isEmpty`               | checks whether a string is empty or not                                                                                               |
| `slugify`               | makes a slug from a string                                                                                                            |

We are adding others day by day.

## Development

Visit our github repository [here](https://github.com/oreste-abizera/string-method). Any suggestion or improvement on this library is welcome.
