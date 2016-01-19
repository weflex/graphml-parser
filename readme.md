# GraphML Parser

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Dependency Status][david-image]][david-url]
[![Downloads][downloads-image]][downloads-url]

**What's the Graph ML?**

Graph ML is for Graph Marked Lanuage, which is similar with Facebook's GraphQL,
But mostly as a Domain-Specific expression in WeFlex team.

This libaray is for generating abstract syntax tree from given Graph ML source file.

## Why create this project

WeFlex team internally takes StrongLoop's loopback framework be working with most other
libraries, and we are focusing on writing more graceful codebase. Loopback's JSON model
definition looks good to define SQL-like tables, but we have a document-based MongoDB to
be generated for views, so we found the GraphQL is close to our needs.

This project doesn't be compatible with GraphQL, if you expect a library to parse the complete
GraphQL, you should visit [ooflorent/graphql-parser](https://github.com/ooflorent/graphql-parser).

## Installation

```sh
$ npm install graphml-parser --save
```

## Usage

```js
var graphql = require('graphml-parser');
var source = fs.readFileSync('../foo.graphml').toString('utf8');
var ast = graphql.parse(source);
```

The GraphML file should look like the following:

```
Basis {
  foo,
  bar,
  items(limit=10, status=checkin) {
    bar
  }
}
```

Then you will get the following tree:

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
        "args": {
          "limit": 10,
          "status": "checkin"
        },
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

[npm-image]: https://img.shields.io/npm/v/graphml-parser.svg?style=flat-square
[npm-url]: https://npmjs.org/package/graphml-parser
[travis-image]: https://img.shields.io/travis/weflex/graphml-parser.svg?style=flat-square
[travis-url]: https://travis-ci.org/weflex/graphml-parser
[david-image]: http://img.shields.io/david/weflex/graphml-parser.svg?style=flat-square
[david-url]: https://david-dm.org/weflex/graphml-parser
[downloads-image]: http://img.shields.io/npm/dm/graphml-parser.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/graphml-parser
