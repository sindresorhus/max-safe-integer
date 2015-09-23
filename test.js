'use strict';
var test = require('ava');
var MAX_SAFE_INTEGER = require('./');

test(function (t) {
	t.is(typeof MAX_SAFE_INTEGER, 'number');
	t.is(MAX_SAFE_INTEGER + 1, MAX_SAFE_INTEGER + 2);
	t.not(MAX_SAFE_INTEGER - 1, MAX_SAFE_INTEGER - 2);
	t.end();
});
