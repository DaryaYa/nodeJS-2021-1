const uuid = require('uuid');
// const { columnSchema } = require('./columns.model');

class Board {
  constructor({
    id = uuid(),
    title = 'board',
    columns = [],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;