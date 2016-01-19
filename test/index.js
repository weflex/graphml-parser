"use strict";

const test = require('tape');
const fs = require('fs');
const path = require('path');
const parse = require('../index').parse;

test('foo', function (t) {
  var source = fs.readFileSync(
    path.join(__dirname, './fixtures/foo.graphml'));
  var ast = parse(source);
  t.equal(ast.type, 'Basis');
  t.deepEqual(ast.root.fields, ['foo', 'bar']);
  t.deepEqual(ast.root.methods.items.fields, ['bar']);
  t.deepEqual(ast.root.methods.items.args, {
    limit: 10,
    status: 'checkin'
  });
  t.end();
});
