const boardsRepo = require('./board.memory.repository');

const getAllBoards = () => boardsRepo.getAllBoards();

const getBoard = id => boardsRepo.getBoard(id);
 
const createBoard = board => boardsRepo.createBoard(board);

const updateBoard = (id, board) => boardsRepo.updateBoard(id, board);

const deleteBoard = id => boardsRepo.deleteBoard(id);

module.exports = {
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
};