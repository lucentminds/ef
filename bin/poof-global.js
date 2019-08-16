#!/usr/bin/env node

/** List jshint ignore directives here. **/
/* jshint undef: true, unused: true */
/* jslint node: true */
/* jshint esversion:6 */
/* eslint-env es6 */

const argv = require('minimist')(process.argv.slice(2));
const a_paths =  argv._;
const poof = require('../lib/poof');

main();

function main(){
   if( argv.help || a_paths.length < 1 ){
      return show_help();
   }

   // Makes the file and direcories.
   poof( a_paths );

}// /main()

function show_help() {
   console.log( `Usage: poof [OPTION]... DIRECTORY/FILE...
   Create the DIRECTORY(ies), if they do not already exist.
   Update the access and modification times of each FILE to the current time.
   ` );
}// /show_help()