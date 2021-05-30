const uuid = require('uuid');
const { db } = require('../db');

const { tasks } = db;

/** 
 * This function creates a list of all tasks on the board
 * @param {string} boardId - ID of the board
 * @returns {Object[]} The list of all users
 */
const getAllTasks = async (boardId) =>
  tasks.filter((item) => item.boardId === boardId);

/** 
 * This function finds a task by ID on the board
 * @param {string} boardId - id of the board 
 * @param {string} taskId - ID of the task
 * @returns {Object} The task
 */  
const getTask = async (boardId, taskId) =>
  tasks.find((item) => item.id === taskId && item.boardId === boardId);

/** 
 * This function creates a task by ID of the board and given data
 * @param {string} boardId - id of the board 
 * @param {Object} data - data of the task
 * @returns {Object} The newly created task
 */    
const createTask = async (boardId, data) => {
  const newTask = {
    id: uuid.v4(),
    ...data,
    boardId,
  };
  tasks.push(newTask);
  return newTask;
};

/** 
 * This function updates a task by ID on the board with given data
 * @param {string} boardId - id of the board 
 * @param {string} taskId - id of the task
 * @param {Object} data - new data for the task
 * @returns {Object} The newly created task
 */   
const updateTask = async (boardId, taskId, data) => {
  const newTask = { ...data, taskId };
  const taskIndex = tasks.findIndex(
    (item) => item.id === taskId && item.boardId === boardId
  );
  if (taskIndex === -1) return null;
    tasks[taskIndex] = newTask;
    return newTask;
};

/** 
 * This function deletes a task by ID 
 * @param {string} taskId - id of the task
 * @returns {number} The index of a deleted task
 */ 
const deleteTask = async (taskId) => {
  const taskIndex = tasks.findIndex((item) => item.id === taskId);
  if (taskIndex === -1) return null;
    tasks.splice(taskIndex, 1);
    return taskIndex;
};

/** 
 * This function clears a task by a user ID 
 * @param {string} userId - id of the user who was deleted
 */ 
const unassignUserTask = async (userId) => {
  tasks.forEach((item, index) => {
    if (item.userId === userId) tasks[index].userId = null;
  });
};

/** 
 * This function clears all tasks from the board with a given ID 
 * @param {string} boardId - id of the board which was deleted
 * @returns {Object[]} The list of all tasks on the deleted board
 */ 
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
