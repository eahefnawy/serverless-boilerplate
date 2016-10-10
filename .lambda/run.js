'use strict';

const lambda = require('./');


const helloHandler = require('../functions')['hello'];
const event = require('./events/default.json');
const context = require('./contexts/default.json');

lambda.run(helloHandler, event, context);