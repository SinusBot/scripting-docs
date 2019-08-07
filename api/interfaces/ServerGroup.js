/**
 * @interface ServerGroup
 */
class ServerGroup {
  /**
   * @returns {string} ID of the server group
   */
  id() { }
  /**
   * @returns {string} Name of the server group
   */
  name() { }
  /**
   * @returns {string} ID of the icon used for the channel group
   * @since 0.12.0
   */
  icon() { }
  /**
   * @description Adds a client by database ID to the servergroup
   * @returns {boolean} status if the request was successful
   * @since 0.13.37
   * @param {(Client|string|number)} client - The client can be a client object, string or number
   */
  addClientByDatabaseId(client) { }
  /**
   * @description Removes a client by database ID from the servergroup
   * @returns {boolean} status if the request was successful
   * @since 0.13.37
   * @param {(Client|string|number)} client - The client can be a client object, string or number
   */
  removeClientByDatabaseId(client) { }
  /**
   * @description Gets the permissions for the servergroup from the server - this is an expensive call as the permissions are _not_ cached
   * @since 0.13.37
   * @returns {Permission[]}
   */
  getPermissions() { }
  /**
   * @description Adds/sets a new permission to the servergroup; you need to use the setters and then call save() to apply - can also be used to remove a permission by delete() afterwards
   * @since 0.13.37
   * @param {string} id - id of the permission to add; can also be supplied as name like i_channel_needed_join_power
   * @returns {Permission}
   */
  addPermission(id) { }
}
