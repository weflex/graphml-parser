"use strict";

const test = require('tape');
const fs = require('fs');
const path = require('path');
const parse = require('../index').parse;

test('foo', function (t) {
  var source = fs.readFileSync(
    path.join(__dirname, './fixtures/foo.graphml'));
  var ast = parse(source);
  console.log(ast);
  t.end();
});
