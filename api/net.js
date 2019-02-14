
/**
 * @interface NetClient
 * @version 0.9.16
 */
class NetClient {
    /**
     * @description Sends data over the connection
     * @param {(string|Bytes|number[])} bytes - Data that should be sent over the socket; one can also send an array of ints / bytes like [0, 255, 1, 1]
     * @param {string} [format] - Optional, if given bytes will be decoded prior to sending; Can be either "hex" or "base64".
     */
    write(bytes, format) { }

    /**
     * @description Registers a new event handler
     * @param {string} event - Name of the event to listen to
     * @param {function} callback
     */
    on(event, callback) { }

    /**
     * @description Closes the current connection
     */
    close() { }
}
/**
 * @event data
 * @memberof NetClient
 * @param {Bytes}
 * @description Gets fired whenever data is received
 */
/**
 * @event close
 * @memberof NetClient
 * @description Gets fired whenever the connection is closed
 */
/**
 * @event error
 * @memberof NetClient
 * @param {string} error
 * @description Gets fired whenever an error occurred
 */

/**
 * @typedef {object} NetConnectParams
 * @version 0.9.16
 * @property {string} [host] - Host to connect to; required for mysql / postgres
 * @property {number} [port] - Port to use
 * @property {string} [url] - WebSocket URL to use
 * @property {string} [protocol=tcp] - can be udp, tcp or ws (websocket)
 */

/**
 * @callback netConnectCallback
 * @see module:net#connect
 * @version 0.9.16
 * @description If an error occured, exactly one parameter containing the error will be handed to the callback.
 * @param {string} [error]
 */

/**
 * @module net
 * @version 0.9.16
 * @example
 * var net = require('net');
 * var engine = require('engine');
 * var conn = net.connect({ host: '127.0.0.1', port: 80 }, function(err) {
 *     if (err) { engine.log(err); }
 * });
 * conn.on('data', function(x) {
 *     engine.log('got data');
 *     engine.log(x.toString());
 * })
 * if (conn) conn.write("GET / HTTP/1.1\r\nHost: localhost\r\n\r\n");
 * @description
 * The net module is protected, it needs the following entry per script in your config.ini:
 * ```
 * [Scripts.Privileges]
 * scriptname = ["net"]
 * ```
 */
module.exports = {
    /**
     * @param {NetConnectParams} params - Connection parameters
     * @param {netConnectCallback} callback - Callback gets called on success/error.
     * @returns {?NetClient} Client connection, or null if failed to setup a connection
     * (e.g. wrong parameters; null does not mean that the connection failed, instead that it is handled in the callback)
     */
    connect: (params, callback) => {},
}