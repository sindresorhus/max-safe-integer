'use strict';
var test = require('ava');
var MAX_SAFE_INTEGER = require('./');

test(function (t) {
	t.assert(typeof MAX_SAFE_INTEGER === 'number');
	t.end();
});
