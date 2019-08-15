#!/usr/bin/env node

/** List jshint ignore directives here. **/
/* jshint undef: true, unused: true */
/* jslint node: true */
/* jshint esversion:6 */
/* eslint-env es6 */

const a_paths = process.argv.slice(2);
const poof = require('../lib/poof');

// Displays the text in the console
poof( a_paths );