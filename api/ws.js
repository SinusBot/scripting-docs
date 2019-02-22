/**
 * @module ws
 * @since 0.9.20
 * @fires event#event:ws.connect
 * @fires event#event:ws.close
 * @fires event#event:ws.error
 * @fires event#event:ws.data
 * @description
 * Websocket Server:
 * The ws module is protected, it needs the following entry per script in your config.ini:
 * ```
 * [Scripts.Privileges]
 * scriptname = ["ws"]
 * ```
 * @example
 * SinusBot script:
 * var ws = require('ws');
 * var engine = require('engine');
 * var event = require('event');
 * 
 * event.on('ws.connect', function(id) {
 *     engine.log('new websocket connection; id ' + id);
 *     ws.broadcast(1, { blubb: 'blubb' });
 * });
 * event.on('ws.disconnect', function(id) {
 *     engine.log('websocket connection disconnected; id ' + id);
 * });
 * event.on('ws.data', function(id, type, data) {
 *     engine.log('ws.data: id ' + id + '; data: ' + data.toString());
 *     ws.write(id, type, data.toString());
 * });
 * @example
 * Client Side (served html files via the enableWeb script option):
 * var proto = (window.location.protocol == 'https:') ? 'wss' : 'ws';
 * var conn = new WebSocket(proto + "://" + document.location.host + "/api/v1/b/" + botId + "/i/" + instanceId + "/ws");
 * conn.onclose = function (evt) {
 * console.log('close', evt);
 *     alert('Closed.');
 * };
 * conn.send(JSON.stringify({ type: 'ping' }));
 * conn.onmessage = function (evt) {
 *     var data = JSON.parse(evt.data);
 * };
 */
module.exports = {
    /**
     * @description Writes some data to the connection with given connectionId
     * @param {string} connectionId
     * @param {number} messageType
     * @param {(string|Bytes)} message - Actual message; can be given as string or byteshelper
     */
    write: (connectionId, messageType, message) => {},

    /**
     * @description Broadcasts some data to all connected clients
     * @param {number} messageType
     * @param {(string|Bytes)} message - Actual message; can be given as string or byteshelper
     */
    broadcast: (messageType, message) => {},

    /**
     * @description Closes the connection
     * @param {string} connectionId
     */
    close: (connectionId) => {},
}