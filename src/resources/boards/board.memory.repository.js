const DB1 = require('../../common/inMemoryDb');

const getAllBoards = async () => DB1.getAllBoards();

const getBoard = async id => DB1.getBoard(id);

const createBoard = async board => DB1.createBoard(board);

const updateBoard = async (id, board) => DB1.updateBoard(id, board);

const deleteBoard = async (id) => DB1.deleteBoard(id);

module.exports = {
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
};