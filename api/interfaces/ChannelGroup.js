/**
 * @interface ChannelGroup
 */
class ChannelGroup {
  /**
   * @returns {string} ID of the channel group
   */
  id() { }
  /**
   * @returns {string} Name of the channel group
   */
  name() { }
  /**
   * @returns {string} ID of the icon used for the channel group
   * @since 0.12.0
   */
  icon() { }
  /**
   * @description Gets the permissions for the channelgroup from the server - this is an expensive call as the permissions are _not_ cached
   * @since 0.13.37
   * @returns {Permission[]}
   */
  getPermissions() { }
  /**
   * @description Adds/sets a new permission to the channelgroup; you need to use the setters and then call save() to apply - can also be used to remove a permission by delete() afterwards
   * @since 0.13.37
   * @param {string} id - id of the permission to add; can also be supplied as name like i_channel_needed_join_power
   * @returns {Permission}
   */
  addPermission(id) { }
}