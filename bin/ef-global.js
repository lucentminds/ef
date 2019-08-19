#!/usr/bin/env node

/** List jshint ignore directives here. **/
/* jshint undef: true, unused: true */
/* jslint node: true */
/* jshint esversion:6 */
/* eslint-env es6 */

const argv = require('minimist')(process.argv.slice(2));
const a_paths =  argv._;
const ef = require('../lib/ef');

main();

function main(){
   if( argv.help || a_paths.length < 1 ){
      return show_help();
   }

   // Makes the file and direcories.
   ef( a_paths )
   .then(function( c_path ){
      console.log( c_path );
   });

}// /main()

function show_help() {
   console.log( `Usage: ef [OPTION]... /DIRECTORY/DIRECTORY/FILE...
   Ensures that the file exists. If the file that is requested to be created is 
   in directories that do not exist, these directories are created. If the file 
   already exists, it is NOT MODIFIED.
   ` );
}// /show_help()