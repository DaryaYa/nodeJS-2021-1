const uuid = require('uuid');

class Column {
  constructor({ id = uuid(), title = 'board', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }

  static toResponse(column) {
    const { title, order, id } = column;
    return { title, order, id };
  }
}
module.exports = Column;