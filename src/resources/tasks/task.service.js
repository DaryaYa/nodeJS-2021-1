const taskRepo = require('./task.memory.repository');

const getAll = (boardId) => taskRepo.getAllTasks(boardId);

const getTask = (boardId, taskId) => taskRepo.getTask(boardId, taskId);

const createTask = (boardId, task) => taskRepo.createTask(boardId, task);

const updateTask = (boardId, taskId, data) =>
  taskRepo.updateTask(boardId, taskId, data);

const deleteTask = (id) => taskRepo.deleteTask(id);

const unassignUserTask = (userId) => taskRepo.unassignUserTask(userId);

const clearTasksFromBoard = (boardId) => taskRepo.clearBoardTasks(boardId);

module.exports = {
  getAll,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  unassignUserTask,
  clearTasksFromBoard,
};

// const tasksRepo = require('./task.memory.repository');

// const getAllTasks = (boardId) => tasksRepo.getAllTasks(boardId);

// const get = (boardId, taskId) => tasksRepo.get(boardId, taskId);

// const create = (task) => tasksRepo.create(task);

// module.exports = { getAllTasks, get, create };
