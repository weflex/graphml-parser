"use strict";

var assert = require('assert');

function parse (src) {
  if (Buffer.isBuffer(src)) {
    src += '';
  }
  var pos = 0;
  var token = '';
  var obj = newObj();
  var ctx = obj;
  var isParsingArgs = false;
  var savedToken = null;
  var savedArgs = null;

  do {
    var ch = src[pos];

    // check if the program is parsing arguments ()
    if (isParsingArgs === true) {
      if (ch === ')') {
        savedArgs = token.split(',').reduce(function (val, item) {
          var obj = item.split('=');
          // convert the string to number
          var oval = Number(obj[1]);
          if (isNaN(oval)) {
            oval = obj[1];
          }
          if (oval === 'true') {
            oval = true;
          } else if (oval === 'false') {
            oval = false;
          }
          val[obj[0].trim()] = oval;
          return val;
        }, {});
        isParsingArgs = false;
        token = savedToken;
      } else {
        token += ch;
      }
      continue;
    }
    
    assert.equal(isParsingArgs, false);
    if (!/(\s|{|}|,|\()/.test(ch)) {
      token += ch;
    } else {
      if (!obj.type) {
        obj.type = token;
        token = '';
      } else if (ch === ',') {
        if (token) {
          ctx.fields.push(token);
          token = '';
        }
      } else if (ch === '{') {
        var o = newObj();
        o.parent = ctx;
        if (savedArgs) {
          o.args = savedArgs;
          savedArgs = null;
        }
        if (!token) {
          ctx = ctx.root = o;
        } else {
          ctx = ctx.methods[token] = o;
          token = '';
        }
      } else if (ch === '}') {
        if (token) {
          ctx.fields.push(token);
        }
        ctx = ctx.parent;
        token = '';
      } else if (ch === '(') {
        assert.equal(isParsingArgs, false);
        isParsingArgs = true;
        savedToken = token;
        token = '';
      }
    }
  } while (src[pos++]);
  // return objects
  return obj;
}

function newObj () {
  return {
    type: false,
    fields: [],
    methods: {}
  };
}

exports.parse = parse;
