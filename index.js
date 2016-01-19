"use strict";

function parse (src) {
  if (Buffer.isBuffer(src)) {
    src += '';
  }
  var pos = 0;
  var token = '';
  const obj = newObj();
  var ctx = obj;

  do {
    let ch = src[pos];
    if (!/(\s|{|}|,)/.test(ch)) {
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
        let o = newObj();
        o.parent = ctx;
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
