/**
 * @typedef {object} BannerSettings
 * @since 0.14.2
 * @property {string} format - e.g. "png"
 * @property {number} width
 * @property {number} height
 * @property {BannerLayer[]} layers
 */

/**
 * @todo TODO: Document Layer Parameters! => https://github.com/SinusBot/scripting-docs/issues/23
 * @typedef {object} BannerLayer
 * @since 0.14.2
 */

 /**
 * @module graphics
 * @since 0.14.2
 * @description
 * This module is protected. This means that you need to add `'graphics'` to `requiredModules` in your script's {@link Manifest} in {@link registerPlugin} in order to use it.
 * 
 * The best example on how to use the graphics module is the [Avatar banner script](https://forum.sinusbot.com/resources/avatar-banner-for-and-with-sinusbot.326/) by [Filtik](https://forum.sinusbot.com/members/filtik.7044/#resources).
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
     *         // FIXME: add layers here
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