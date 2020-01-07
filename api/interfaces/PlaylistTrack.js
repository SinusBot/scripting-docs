/**
 * @interface PlaylistTrack
 * @description Track in a Playlist
 */
class PlaylistTrack {
  /**
   * @returns {string} Title of the track
   */
  title() { }
  /**
   * @returns {string} Artist of the track
   */
  artist() { }
  /**
   * @returns {string} Album of the track
   */
  album() { }
  /**
   * @returns {string} Url of the track (internal or external)
   */
  url() { }
  /**
   * @description Starts playback of the track
   * @returns {boolean} success
   */
  play() { }
  // /**
  //  * @description Checks if a title exists for this PlaylistTrack
  //  * @returns {boolean} wether a title exists on this PlaylistTrack
  //  */
  // hasTitle() { }
  // /**
  //  * @description Checks if an album exists for this PlaylistTrack
  //  * @returns {boolean} wether an album exists on this PlaylistTrack
  //  */
  // hasAlbum() { }
  // /**
  //  * @description Checks if an artist exists for this PlaylistTrack
  //  * @returns {boolean} wether an artist exists on this PlaylistTrack
  //  */
  // hasArtist() { }
  // /**
  //  * adds the track to the queue
  //  * @returns {boolean}
  //  */
  // enqueue: function() {},
  // /**
  //  * adds the track as the first entry in the queue
  //  * @returns {boolean}
  //  */
  // playNext: function() {}
}