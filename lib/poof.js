
/** List jshint ignore directives here. **/
/* jshint undef: true, unused: true */
/* jslint node: true */
/* jshint esversion:6 */
/* eslint-env es6 */

const path = require( 'path' );
const exec_cb = require( 'child_process' ).exec;


/** 
 * Touches a file while creating a full path of directories.
 * @param {a_paths} Array An array of file paths to touch.
 */
const poof = function( a_paths ){
   return new Promise( function( resolve, reject ){
   
      a_paths.map(function( c_path ){
         const c_full_file_path = path.resolve( c_path );
         const c_full_dir_path = path.dirname( c_full_file_path );

         exec( `mkdir -p ${c_full_dir_path}` )

         .then(function( stdout ){
            return exec( `touch ${c_full_file_path}` );
         },function( stderr ){ return reject( stderr ); })

         .then(function( stdout ){
            resolve( stdout );
         },function( stderr ){ return reject( stderr ); });

      });

   });
};// /poof()

var exec = function( c_command ){
   return new Promise( function( resolve, reject ){
      exec_cb( c_command, function( err, stdout, stderr ){
         if( err ){
            return reject( err.message );
         }

         if( stderr ){
            return reject( stderr );
         }

         return resolve( stdout );
      });
   });
};// /exec()

module.exports = poof;
