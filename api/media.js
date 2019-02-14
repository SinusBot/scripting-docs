/**
 * @module media
 */
module.exports = {
    /**
     * @description Plays a track via internal url
     * @param {string} url - Internal url (like track://...)
     * @returns {boolean}
     */
    playURL: (url) => {},

    /**
     * Returns the current track
     * @returns {Track}
     */
    getCurrentTrack: () => {},

    /**
     * Returns the track with the given ID (or null if none was found)
     * @returns {?Track}
     */
    getTrackByID: (id) => {},

    /**
     * @description Searches for tracks matching the search term, returns 20 entries at most
     * @param {string} searchString
     * @returns {Track[]}
     * @example
     * var event = require('event');
     * var media = require('media');
     * 
     * event.on('chat', function(ev) {
     *     var params = ev.text.split(' ');
     *     if (params.length == 1) {
     *         ev.client.chat('Please enter a searchterm after .play - like .play november rain');
     *         return;
     *     }
     *     if (params[0] == '.play') {
     *         params.shift();
     *         var results = media.search(params.join(' '));
     *         if (results.length > 0) {
     *             results[0].play();
     *             ev.client.chat('Playing - just for you: ' + results[0].artist() + ' - ' + results[0].title());
     *         } else {
     *             ev.client.chat('Sorry, I could not find anything that matched your search.');
     *         }
     *     }
     * });
     */
    search: (searchString) => {},

    /**
     * @description Adds the given url to the queue
     * @param {string} url
     * @returns {boolean}
     */
    enqueue: (url) => {},

    /**
     * @description Adds the given url as the first entry in the queue
     * @param {string} url
     * @returns {boolean}
     * @since 0.12.0
     */
    playAsNext: (url) => {},

    /**
     * @description Plays the next track of the queue / playlist
     */
    playNext: () => {},

    /**
     * @description Plays the next previous of the queue / playlist
     */
    playPrevious: () => {},

    /**
     * @description Stops playback completely
     * @param {string} [trackID] - (optional) the track to stop; if not present, all tracks will be stopped
     * @returns {boolean}
     */
    stop: (trackID) => {},

    /**
     * Returns all tracks of the queue
     * @returns {Track[]}
     */
    getQueue: () => {},

    /**
     * Returns all playlists
     * @returns {Playlist[]}
     */
    getPlaylists: () => {},

    /**
     * Returns the playlists with the given id
     * @returns {Playlist}
     */
    getPlaylistByID: (id) => {},

    /**
     * Returns the currently active playlist
     * @returns {Playlist}
     */
    getActivePlaylist: (id) => {},

    /**
     * @description Removes the track at a given position from the queue
     * @param {number} index - Index of the track that should be removed from the queue (0 being the first entry)
     * @returns {boolean}
     */
    removeFromQueue: (index) => {},

    /**
     * @description Removes all entries from the queue
     * @returns {boolean}
     */
    clearQueue: () => {},

    /**
     * @description Clears the current playlist (if set) so that playback won't continue inside that playlist
     * @returns {boolean}
     */
    clearPlaylist: () => {},

    /**
     * @description Streams a file via youtube-dl
     * @param {string} url - Url that youtube-dl supports
     */
    yt: (url) => {},

    /**
     * @description Downloads a file via youtube-dl, optionally plays it
     * @param {string} url - Url that youtube-dl supports
     * @param {boolean} play - Set to true to play after download
     */
    ytdl: (url, play) => {},

    /**
     * @description Enqueues a stream via youtube-dl
     * @param {string} url - Url that youtube-dl supports
     */
    enqueueYt: (url) => {},

    /**
     * @description Downloads a file via youtube-dl, then enqueues it
     * @param {string} url - Url that youtube-dl supports
     */
    enqueueYtdl: (url) => {},
}