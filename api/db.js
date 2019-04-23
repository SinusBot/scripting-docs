/**
 * @interface DBConn
 * @since 0.9.16.4
 */
class DBConn {
    /**
     * @description
     * Use this, if you expect a result set;
     * Note: strings will be returned as byte arrays to be binary safe; to convert to actual strings, please use helpers.toString(column)
     * @param {string} queryString
     * @param {any} [parameters] - Zero or more parameters; e.g. for mysql, ? in the queryString will be replaced with these parameters
     * @param {dbQueryCallback} callback - Callback is called after the query has finished.
     */
    query(queryString, parameters, callback) {}

    /**
     * @description Use this insted of query if you don't expect a result
     * @param {string} queryString
     * @param {any} [parameters] - Zero or more parameters; e.g. for mysql, ? in the queryString will be replaced with these parameters
     * @param {dbQueryCallback} [callback]
     */
    exec(queryString, parameters, callback) {}
}
/**
 * @callback dbQueryCallback
 * @see DBConn#query
 * @see DBConn#exec
 * @since 0.9.16.4
 * @description Gets called with two parameters, err and result - both are mutually exclusive.
 * Result contains an array of rows, each containing an object with the column names as key.
 * @param {string} [error]
 * @param {object[]} [result]
 */

/**
 * @typedef {object} DBParams
 * @since 0.9.16
 * @property {string} driver - Database driver to use, sqlite3 (default; currently in-memory only), mysql or postgres
 * @property {string} [host] - Database server to connect to, required for mysql / postgres
 * @property {string} [username]
 * @property {string} [password]
 * @property {number} [port]
 */

/**
 * @callback dbConnectCallback
 * @see module:db#connect
 * @since 0.9.16.4
 * @description If an error occured, exactly one parameter containing the error will be handed to the callback
 * @param {string} [error]
 */

/**
 * @module db
 * @since 0.9.16.4
 * @description
 * This module is protected. This means that you need to add `'db'` to `requiredModules` in your script's {@link Manifest} in {@link registerPlugin} in order to use it.
 * 
 * Use additional parameters to exec / query whenever you use untrusted/unknown data, as those will automatically be escaped and avoid SQL injection.
 * @example
 * var db = require('db');
 * var engine = require('engine');
 * var helpers = require('helpers');
 * var dbc = db.connect({ driver: 'mysql', host: '127.0.0.1', username: 'demo', password: 'blah', database: 'foo' }, function(err) {
 *     if (err) {
 *          engine.log(err);
 *     }
 * });
 * if (dbc) dbc.exec("INSERT INTO blah (foo, foo2) VALUES (?, ?)", 'bar', 'bar2');
 * if (dbc) dbc.query("SELECT * FROM blah", function(err, res) {
 *     if (!err) {
 *          res.forEach(function(row) {
 *              engine.log(helpers.toString(row.foo));
 *          });
 *     }
 * });
 */
module.exports = {
    /**
     * @param {DBParams} params - Connection parameters
     * @param {dbConnectCallback} callback - Callback gets called on success / error;
     * If an error occured, exactly one parameter containing the error will be handed to the callback
     * @returns {?DBConn} Database connection or null if failed
     */
    connect: (params, callback) => {}
}