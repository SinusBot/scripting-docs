
/**
 * @interface NetClient
 * @since 0.9.16
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
 * @since 0.9.16
 * @property {string} [host] - Host to connect to; required for mysql / postgres
 * @property {number} [port] - Port to use
 * @property {string} [url] - WebSocket URL to use
 * @property {string} [protocol="tcp"] - can be udp, tcp or ws (websocket)
 */

/**
 * @callback netConnectCallback
 * @see module:net#connect
 * @since 0.9.16
 * @description If an error occured, exactly one parameter containing the error will be handed to the callback.
 * @param {string} [error]
 */

/**
 * @module net
 * @since 0.9.16
 * @description
 * This module is protected. This means that you need to add `'net'` to `requiredModules` in your script's {@link Manifest} in {@link registerPlugin} in order to use it.
 * 
 * The net module allows you to connect to any TCP/UDP port or ws (websocket) and send raw data.
 * If you just need to send a http request then you should definitely use the [http module](#http) instead.
 * @example
 * const engine = require('engine');
 * const net = require('net');
 * 
 * // connect to a tcp port
 * const conn = net.connect({
 *     host: '127.0.0.1',
 *     port: 80
 * }, err => {
 *     // log connection errors if any
 *     if (err) {
 *         engine.log(err);
 *     }
 * });
 * 
 * // start listening for data
 * conn.on('data', data => {
 *     engine.log('received data');
 *     engine.log(data.toString());
 * })
 * 
 * // write data if connection is available
 * if (conn) {
 *     // write data
 *     conn.write("GET / HTTP/1.1\r\nHost: localhost\r\n\r\n");
 * } else {
 *     engine.log('connection unavailable');
 * }
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