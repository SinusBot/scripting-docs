/**
 * @module format
 */
module.exports = {
    /**
     * @description Apply color if the backend supports it
     * @param {string} text - Text that should be colored
     * @param {string} color - Hex value of color to apply
     * @returns {string} Formatted string
     * @example
     * // Sends a red-colored message to the server chat (requires permission to do so)
     * var backend = require('backend');
     * var format = require('format');
     * backend.chat('This is SinusBot writing in ' + format.color('red', '#aa0000'));
     */
    color: (text, color) => {},

    /**
     * @description Apply italic formatting to text
     * @param {string} text
     * @returns {string} Formatted string
     * @example
     * // Sends a formattes message to the server chat (requires permission to do so)
     * var backend = require('backend');
     * var format = require('format');
     * backend.chat('Part of this message is ' + format.italic('italic')); 
     */
    italic: (text) => {},

    /**
     * @description Apply bold formatting to text
     * @param {string} text
     * @returns {string} Formatted string
     * @example
     * // Sends a formattes message to the server chat (requires permission to do so)
     * var backend = require('backend');
     * var format = require('format');
     * backend.chat('Part of this message is ' + format.bold('bold')); 
     */
    bold: (text) => {},

    /**
     * @description Apply underlined formatting to text
     * @param {string} text
     * @returns {string} Formatted string
     * @example
     * // Sends a formatted message to the server chat (requires permission to do so)
     * var backend = require('backend');
     * var format = require('format');
     * backend.chat('Part of this message is ' + format.underline('underlined')); 
     */
    underline: (text) => {},

    /**
     * @description Formats text as code
     * @param {string} text
     * @returns {string} Formatted string
     */
    code: (text) => {},
}