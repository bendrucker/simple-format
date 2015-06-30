'use strict'

var test = require('tape')
var format = require('./')

test(function (t) {
  t.equal(format('foo%s', 'bar'), 'foobar')
  t.equal(format('foo', 'bar'), 'foo bar')
  t.end()
})
