const uuid = require('uuid').v4;
/**
 * This class will build a task according to the params in the model.
 * The task will have a static method toResponse.
 * @constructor
 * @param {string} id - task ID
 * @param {string} title - task title
 * @param {number} order - order of the task on the board
 * @param {string} description - task description
 * @param {string} userId - ID of the user who emitted a task
 * @param {string} boardId - ID of the board on which the task was placed
 * @param {string} columnId - ID of the column in which the task was placed on the board
 */
class Task {
  constructor({
    id = uuid(),
    title = 'TASK-1',
    order = 0,
    description = 'description-1 ',
    userId = 'userID',
    boardId = 'boardId',
    columnId = 'columnId',
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.taskId = boardId;
    this.columnId = columnId;
  }

  /**
   * @static
   * @param {string} id - task ID
   * @param {string} title - task title
   * @param {number} order - order of the task on the board
   * @param {string} description - task description
   * @param {string} userId - ID of the user who emitted a task
   * @param {string} boardId - ID of the board on which the task was placed
   * @param {string} columnId - ID of the column in which the task was placed on the board
   * @returns {Object} The complete task with all the data from the constructor
   * @memberof Task
   */
  static toResponse(task) {
    const { id, title, order, description, userId, taskId, columnId } = task;
    return { id, title, order, description, userId, taskId, columnId };
  }
}

module.exports = Task;
