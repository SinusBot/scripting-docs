/**
 * @typedef {object} BannerSettings
 * @since 0.14.2
 * @property {string} format - e.g. "png"
 * @property {number} width
 * @property {number} height
 * @property {BannerLayer[]} layers
 */

/**
 * @todo TODO: Document Layer Parameters!
 * @typedef {object} BannerLayer
 * @since 0.14.2
 */

 /**
 * @module graphics
 * @since 0.14.2
 * @example
 * var graphics = require('graphics');
 */
module.exports = {
    /**
     * @description Removes the banner.
     * @return {boolean} success
     */
    removeBanner: () => {},

    /**
     * @description Setbanner sets the avatar of the sinusbot client.
     * @example 
     * graphics.setBanner('banner', {
     *     "format": "png",
     *     "width": 260,
     *     "height": 120,
     *     "layers": [
     *         // FIXME: layers
     *     ]
     * }, function() {
     *     engine.setAvatarFromBanner('banner.png');
     * });
     * @param {string} filename - filename without ending
     * @param {BannerSettings} bannerSettings
     * @param {function} callback
     * @return {boolean} success
     */
    setBanner: (filename, bannerSettings, callback) => {},
}