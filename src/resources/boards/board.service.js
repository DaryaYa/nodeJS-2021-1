const boardRepo = require('./board.memory.repository');
const taskService = require('../tasks/task.service');

const getAll = () => boardRepo.getAllBoards();

const getBoard = (id) => boardRepo.getBoard(id);

const createBoard = (board) => boardRepo.createBoard(board);

const updateBoard = (id, board) => boardRepo.updateBoard(id, board);

const deleteBoard = (id) => {
  taskService.clearTasksFromBoard(id);
  return boardRepo.deleteBoard(id);
};

module.exports = {
  getAll,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
};

// const boardsRepo = require('./board.memory.repository');

// const getAllBoards = () => boardsRepo.getAllBoards();

// const get = id => boardsRepo.getBoard(id);

// const create = board => boardsRepo.createBoard(board);

// const updateBoard = (id, board) => boardsRepo.updateBoard(id, board);

// const deleteBoard = id => boardsRepo.deleteBoard(id);

// module.exports = {
//   getAllBoards,
//   get,
//   create,
//   updateBoard,
//   deleteBoard,
// };
