var Util = require( 'findhit-util' ),
    rp = require( 'request-promise' ),
    Promise = require( 'bluebird' );

var defaultOptions = {

};

module.exports = function ( className, methodName, params, options ) {

    // Check arguments

    if( Util.isnt.String( className ) || ! classNameh ) {
        throw new TypeError( "className should be a not empty array" );
    }

    if( Util.isnt.Array( methodName ) || ! methodName ) {
        throw new TypeError( "methodName should be a not empty array" );
    }

    if( Util.isnt.Array( params ) || ! params.length ) {
        throw new TypeError( "params should be a not empty array" );
    }

    // Default options from our defaults
    options = Util.extend( defaultOptions, Util.is.Object( options ) && options || {} );

    // Prepare closure variables for function
    var path = '/api/' + className + '/' + methodName;

    return function () {

        // Match arguments with params
        if( arguments.length !== params.length ) {
            throw new TypeError( "the number of arguments you supplied, doesn't match with the number of parameters we have!" );
        }

        // TODO
        return rp({

        });
    };
};
