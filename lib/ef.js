
/** List jshint ignore directives here. **/
/* jshint undef: true, unused: true */
/* jslint node: true */
/* jshint esversion:6 */
/* eslint-env es6 */

const path = require( 'path' );
const fse = require( 'fs-extra' );


/** 
 * Touches a file while creating a full path of directories.
 * @param {a_paths} Array An array of file paths to touch.
 */
const ef = function( a_paths ){
   return new Promise( function( resolve, reject ){
   
      a_paths.map(function( c_path ){
         const c_full_file_path = path.resolve( c_path );

         fse.ensureFile( c_full_file_path )

         .then(function(){
            resolve( c_full_file_path );
         },function( err ){ return reject( err ); });

      });

   });
};// /ef()

module.exports = ef;
