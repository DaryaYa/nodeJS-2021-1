const uuid = require('uuid');
const { db } = require('../db');

const { tasks } = db;

const getAllTasks = async (boardId) =>
  tasks.filter((item) => item.boardId === boardId);
const getTask = async (boardId, taskId) =>
  tasks.find((item) => item.id === taskId && item.boardId === boardId);

const createTask = async (boardId, data) => {
  const newTask = {
    id: uuid.v4(),
    ...data,
    boardId,
  };
  tasks.push(newTask);
  return newTask;
};

const updateTask = async (boardId, taskId, data) => {
  const newTask = { ...data, taskId };
  const taskIndex = tasks.findIndex(
    (item) => item.id === taskId && item.boardId === boardId
  );
  if (taskIndex !== -1) {
    tasks[taskIndex] = newTask;
    return newTask;
  }
  return null;
};

const deleteTask = async (taskId) => {
  const taskIndex = tasks.findIndex((item) => item.id === taskId);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    return taskIndex;
  }
  return null;
};

const unassignUserTask = async (userId) => {
  tasks.forEach((item, index) => {
    if (item.userId === userId) tasks[index].userId = null;
  });
};

const clearBoardTasks = async (boardId) => {
  for (let i = tasks.length - 1; i >= 0; i -= 1) {
    if (tasks[i].boardId === boardId) {
      tasks.splice(i, 1);
    }
  }
  return tasks;
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  unassignUserTask,
  clearBoardTasks,
};
// // const db = require('../../common/inMemoryDb');
// const boardsService = require('../boards/board.service');

// const getAllTasks = async (boardId) => boardsService.getBoard(boardId);

// const get = async (boardId, taskId) => boardsService.get(boardId, taskId);

// const create = async (boardId, task) => boardsService.create(boardId, task);
// //   db.createTask(task);
// //   getAllTasks(task.boardId);
// //   return get(task.boardId, task.id);
// // };

// module.exports = { getAllTasks, get, create };
