/**
 * @callback simpleRequestCallback
 * @see module:http#simpleRequest
 * @since 0.14.2
 * @param {string} [error]
 * @param {object} [response]
 * @param {Bytes} response.data - Data; Needs to be converted to a string first, e.g. `response.data.toString()`.
 * @param {object} response.headers - Headers
 * @param {string} response.status - Status
 * @param {number} response.statusCode - Status Code
 */

/**
 * @module http
 */
module.exports = {
    /**
     * @since 0.14.2
     * @description Creates an http request
     * @param {object} config - http configuration object
     * @param {string} [config.method] - Request Method to use (eg GET, POST, PUT, ...)
     * @param {string} config.url - The URL endpoint which should be called
     * @param {number} [config.timeout] - timeout in milliseconds
     * @param {string} [config.body] - request body
     * @param {object} [config.headers] - request header
     * @param {simpleRequestCallback} callback - Callback function with error and response
     * @example
     * var engine = require('engine');
     * var http = require('http');
     * 
     * http.simpleRequest({
     *     method: 'GET',
     *     url: 'https://example.com',
     *     timeout: 10 * 1000
     * }, function(error, response) {
     *     if (error) {
     *         engine.log("Error: " + error);
     *         return;
     *     }
     * 
     *     if (response.statusCode != 200) {
     *         engine.log("HTTP Error: " + response.status);
     *         return;
     *     }
     * 
     *     // success!
     *     engine.log("Response: " + response.data.toString());
     * });
     */
    simpleRequest(config, callback) { }
}