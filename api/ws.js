/**
 * @module ws
 * @since 0.9.20
 * @fires event#event:ws.connect
 * @fires event#event:ws.close
 * @fires event#event:ws.error
 * @fires event#event:ws.data
 * @description
 * This module is protected. This means that you need to add `'ws'` to `requiredModules` in your script's {@link Manifest} in {@link registerPlugin} in order to use it.
 * 
 * The ws module allows you to start a websocket server.
 * If you want to connect to a websocket server instead then take look at the [net module](#net).
 * 
 * Please consider using http api events for simple communications instead, as they are simpler and also allow you to require authentication; See [`api:<your event name>`](#eventeventapieventname) and [`public:<your event name>`](#eventeventpubliceventname) for more.
 * @example
 * // ### SinusBot script: ###
 * 
 * const engine = require('engine');
 * const event = require('event');
 * const ws = require('ws');
 * 
 * // listen for connections
 * event.on('ws.connect', id => {
 *     engine.log('new websocket connection; id ' + id);
 *     // broadcast data to all connected clients
 *     ws.broadcast(1, { blubb: 'blubb' });
 * });
 * // listen for disconnections
 * event.on('ws.disconnect', id => {
 *     engine.log('websocket connection disconnected; id ' + id);
 * });
 * // listen for data
 * event.on('ws.data', (id, type, data) => {
 *     engine.log('ws.data: id ' + id + '; data: ' + data.toString());
 *     // respond with data
 *     ws.write(id, type, data.toString());
 * });
 * @example
 * // ### Client Side (served html files via the enableWeb script option): ###
 * 
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