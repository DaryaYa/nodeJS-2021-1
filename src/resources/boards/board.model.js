const uuid = require('uuid').v4;
const Column = require('./columns.model');

class Board {
  constructor({
    id = uuid(),
    title = 'board',
    columns = [],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((col) => new Column(col));
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}
// this.columns = 

module.exports = Board;