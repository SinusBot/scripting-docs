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
 * @description
 * This module is protected. This means that you need to add `'http'` to `requiredModules` in your script's {@link Manifest} in {@link registerPlugin} in order to use it - like shown here:
 * 
 * ```javascript
 * registerPlugin({
 *     name: 'Demo http basic Script',
 *     version: '1.0.0',
 *     description: 'This example script sends a http request.',
 *     author: 'Author <author@example.com>',
 *     //...
 *     // define the protected modules that you require:
 *     requiredModules: ['http'],
 *     //...
 *     vars: []
 * }, (_, config, meta) => {
 *     const engine = require('engine');
 *     // and then you can require and use the module in here:
 *     const http = require('http');
 *     
 *     // send request
 *     http.simpleRequest({
 *         'method': 'GET',
 *         'url': 'https://example.com',
 *         'timeout': 6000,
 *     }, function (error, response) {
 *         if (error) {
 *             engine.log("Error: " + error);
 *             return;
 *         }
 *         
 *         if (response.statusCode != 200) {
 *             engine.log("HTTP Error: " + response.status);
 *             return;
 *         }
 *         
 *         // success!
 *         engine.log("Response: " + response.data.toString());
 *     });
 * });
 * ```
 * 
 * Examples can be found under [simpleRequest](#httpsimplerequest).
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
     * registerPlugin({
     *     name: 'Demo http basic Script',
     *     version: '1.0.0',
     *     description: 'This example script sends a http request.',
     *     author: 'Author <author@example.com>',
     *     requiredModules: ['http'], // <-- don't forget this!
     *     vars: []
     * }, (_, config, meta) => {
     *     // import modules
     *     const engine = require('engine');
     *     const http = require('http');
     *     
     *     // send request
     *     http.simpleRequest({
     *         'method': 'GET',
     *         'url': 'https://example.com',
     *         'timeout': 6000,
     *     }, function (error, response) {
     *         if (error) {
     *             engine.log("Error: " + error);
     *             return;
     *         }
     *         
     *         if (response.statusCode != 200) {
     *             engine.log("HTTP Error: " + response.status);
     *             return;
     *         }
     *         
     *         // success!
     *         engine.log("Response: " + response.data.toString());
     *     });
     * });
     * 
     * @example
     * registerPlugin({
     *     name: 'Demo http basic Script',
     *     version: '1.0.0',
     *     description: 'This example script sends a http request and sends+receives json data.',
     *     author: 'Author <author@example.com>',
     *     requiredModules: ['http'], // <-- don't forget this!
     *     vars: []
     * }, (_, config, meta) => {
     *     // import modules
     *     const engine = require('engine');
     *     const http = require('http');
     *     
     *     // define data that should be sent
     *     var sendData = JSON.stringify({ foo: 'bar' });
     * 
     *     // send request
     *     http.simpleRequest({
     *         'method': 'POST',
     *         'url': 'https://example.com',
     *         'timeout': 6000,
     *         'body': sendData,
     *         'headers': {
     *             'Content-Type': 'application/json',
     *             'Content-Length': sendData.length
     *         }
     *     }, function (error, response) {
     *         if (error) {
     *             engine.log("Error: " + error);
     *             return;
     *         }
     *         
     *         if (response.statusCode != 200) {
     *             engine.log("HTTP Error: " + response.status);
     *             return;
     *         }
     *         
     *         // parse JSON response
     *         var res;
     *         try {
     *             res = JSON.parse(response.data.toString());
     *         } catch (err) {
     *             engine.log(err.message);
     *         }
     *         
     *         // check if parsing was successfull
     *         if (res === undefined) {
     *             engine.log("Invalid JSON.");
     *             return;
     *         }
     *         
     *         // success!
     *         engine.log(res);
     * });
     */
    simpleRequest(config, callback) { }
}