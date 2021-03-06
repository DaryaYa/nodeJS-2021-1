const uuid = require('uuid').v4;

class Column {
  constructor({ 
    id = uuid(), 
    title = 'COLUMN-1', 
    order = 0 } = {}) {
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