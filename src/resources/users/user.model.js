const uuid = require('uuid').v4;
/**
 * This class will build a user according to the params in the model.
 * The user will have a static method toResponse.
 * @constructor
 * @param {string} id - user ID
 * @param {string} name - user name
 * @param {string} login - user login
 * @param {string} password - user password
 */
class User {
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * @static
   * @param {string} id - user id
   * @param {string} name - user name
   * @param {string} login - user login
   * @returns {Object} The complete user without exposing the password
   * @memberof User
   */
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
