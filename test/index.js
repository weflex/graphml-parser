"use strict";

const test = require('tape');
const fs = require('fs');
const parse = require('../index').parse;

test('foo', function (t) {
  var source = fs.readFileSync('./fixtures/foo.graphql');
  var ast = parse(source);
  console.log(ast);
  t.end();
});