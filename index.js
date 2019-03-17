/**
 * Synapse entry file
 * API to handle data operations on Brian schema
 * @memberof core
 */
require = require('esm')(module);
require('dotenv').config();

module.exports = require('./src/main');
