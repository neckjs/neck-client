/**
 * @class Client
 * returns Client
 */
var Client = require( './lib/client' );

// Give access to Server Classes
Client.Interface = {
    Head: require( './lib/interface/head' ),
    Device: require( './lib/interface/device' ),
    Window: require( './lib/interface/window' ),
    Task: require( './lib/interface/Task' ),
};

module.exports = Client;
