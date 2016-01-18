# GraphQL parser

graphql parser for generating abstract syntax tree

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

The graphQL file deos look like the following:

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

MIT Licensed @ WeFlex, Inc.
