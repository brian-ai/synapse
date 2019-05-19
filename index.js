/**
 * Synapse entry file
 * API to handle data operations on Brian schema
 * @memberof core
 */
/* eslint-disable no-global-assign */
require('dotenv').config()
require = require('esm')(module)

module.exports = require('./src/main')
