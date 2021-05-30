const uuid = require('uuid').v4;
/**
 * This class will build a board according to the params in the model.
 * The board will have a static method toResponse.
 * @constructor
 * @param {string} id - board ID
 * @param {string} name - board name
 * @param {string} login - board login
 * @param {string} password - board password
 */
class Board {
  constructor({ id = uuid(), title = 'board title', columns = {} } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  /**
   * @static
   * @param {string} id - board id
   * @param {string} name - board name
   * @param {string} login - board login
   * @returns {Object} The complete board without exposing the password
   * @memberof Board
   */
  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;
