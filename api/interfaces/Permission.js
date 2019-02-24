/**
 * @interface Permission
 * @description handles channel, channelgroup and servergroup permissions; mainly for TS3
 * @since 0.13.37
 */
class Permission {
  /**
   * @since 0.13.37
   * @returns {string} ID of the permission
   */
  id() { }
  /**
   * @since 0.13.37
   * @returns {string} Name of the permission
   */
  name() { }
  /**
   * @since 0.13.37
   * @returns {number} permission value
   */
  value() { }
  /**
   * @since 0.13.37
   * @returns {boolean} true, if skip flag has been set - only applicable for ServerGroups
   */
  skip() { }
  /**
   * @since 0.13.37
   * @returns {boolean} true, if negated flag has been set - only applicable for ServerGroups
   */
  negated() { }
  /**
   * @description sets the value of the permission; you need to call save() to apply changes
   * @since 0.13.37
   * @param {boolean} value - true, if permission should be negated, false otherwise
   * @returns {boolean}
   */
  setNegated(value) { }
  /**
   * @description sets the skip flag - only applicable for ServerGroups; you need to call save() to apply changes
   * @since 0.13.37
   * @param {boolean} value - true, if permission should be skipped, false otherwise
   * @returns {boolean}
   */
  setSkip(value) { }
  /**
   * @description sets the negated flag - only applicable for ServerGroups; you need to call save() to apply changes
   * @since 0.13.37
   * @param {number} value - new value for the permission
   * @returns {boolean}
   */
  setValue(value) { }
  /**
   * @description applies the changed settings
   * @since 0.13.37
   * @returns {boolean}
   */
  save() { }
  /**
   * @description delete the current permission
   * @since 0.13.37
   * @returns {boolean}
   */
  delete() { }
}