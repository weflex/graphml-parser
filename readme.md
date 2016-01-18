# GraphQL Parser

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Dependency Status][david-image]][david-url]
[![Downloads][downloads-image]][downloads-url]

graphql parser for generating abstract syntax tree

## Why create this project

This is not a real parser for GraphQL standard, this project just takes the good form of
GraphQL and make you and your projects are able to express your configurations in this
simple way.

## Installation

```sh
$ npm install graphql-parser --save
```

## Usage

```js
var graphql = require('graphql-parser');
var source = fs.readFileSync('../foo.graphql').toString('utf8');
var ast = graphql.parse(source);
```

The GraphQL file does look like the following:

```
Basis {
  foo,
  bar,
  items {
    bar
  }
}
```

Then you will get from `ast`:

```js
{
  "type": "Basis",
  "fields": [],
  "root": {
    "fields": [
      "foo",
      "bar"
    ],
    "methods": {
      "items": {
        "type": false,
        "fields": [
          "bar"
        ]
      }
    }
  }
}
```

## License

MIT @ WeFlex, Inc.

[npm-image]: https://img.shields.io/npm/v/graphql-parser.svg?style=flat-square
[npm-url]: https://npmjs.org/package/graphql-parser
[travis-image]: https://img.shields.io/travis/weflex/graphql-parser.svg?style=flat-square
[travis-url]: https://travis-ci.org/weflex/graphql-parser
[david-image]: http://img.shields.io/david/weflex/graphql-parser.svg?style=flat-square
[david-url]: https://david-dm.org/weflex/graphql-parser
[downloads-image]: http://img.shields.io/npm/dm/graphql-parser.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/graphql-parser
