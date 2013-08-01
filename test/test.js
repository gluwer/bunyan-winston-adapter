'use strict';
// At the moment it is a manual test.
// TODO: add tests using mocha/chai

var winston = require('winston');
var bwadapter = require('../index');

winston.level = 'debug';
winston.cli();

var adapter = bwadapter.createAdapter(winston);

console.log(adapter.trace());

adapter.error('Hello');
adapter.warn('Hello %s', 'winston');
adapter.debug({foo: 'bar'}, 'hi');
adapter.trace(new Error('Hello error'));
adapter.trace(new Error('Hello error'), 'more on this: %s', 'very nasty');

var adapter2 = bwadapter.createAdapter(winston, {trace: 'silly'});
adapter2.trace(new Error('This is not logged!'));
winston.level = 'silly';
adapter2.trace(new Error('But this will now be!'));