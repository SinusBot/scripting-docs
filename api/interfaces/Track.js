/**
 * @interface Track
 */
class Track {
  /**
   * @returns {string} Unique ID of the track
   */
  id() { }

  /**
   * @returns {string} Unique url for the track
   */
  url() { }

  /**
   * @returns {string} Type of the file 
   */
  type() { }

  /**
   * @returns {string} Title of the track
   */
  title() { }

  /**
   * @returns {string} Artist of the track
   */
  artist() { }

  /**
   * @returns {string} Temporary title of the track; e.g. when playing radio stations
   */
  tempTitle() { }

  /**
   * @returns {string} Temporary artist of the track; e.g. when playing radio stations
   */
  tempArtist() { }

  /**
   * @returns {string} Album of the track
   */
  album() { }

  /**
   * @returns {string} Genre of the track
   * @since 0.9.16
   */
  genre() { }

  /**
   * @returns {number} Duration of the track (in milliseconds)
   * @since 0.9.16
   */
  duration() { }

  /**
   * @returns {number} Tracknumber of the track
   * @since 0.9.16
   */
  trackNumber() { }

  /**
   * @returns {string} Path to the thumbnail, if any
   */
  thumbnail() { }

  /**
   * @returns {string} Original filename
   */
  filename() { }

  /**
   * @description Starts playback of the track
   * @returns {boolean} success
   */
  play() { }

  /**
   * @description Adds the track to the queue
   * @returns {boolean} success
   */
  enqueue() { }

  /**
   * @description Adds the track as the first entry in the queue
   * @returns {boolean} success
   */
  addNext() { }
  
  /**
   * @description Downloads a thumbnail from the internet and stores it for the given track
   * @param {string} url - Url to download the thumbnail from (limited to X MB)
   */
  setThumbnailFromURL(url) { }

  /**
   * @description Removes the thumbnail of a track
   */
  removeThumbnail() { }

  /**
   * @since 1.0.0-beta2
   * @returns {string}
   */
  sourceURL() {  }

  /**
   * @private
   * @returns {string} Something like: "Track { <Artist> - <Title> }"
   */
  string() { }
}