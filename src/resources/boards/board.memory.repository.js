// const uuid = require('uuid');
const { db } = require('../db');
 const Board = require('./board.model');

const getAllBoards = async () => db.boards;

const getBoard = async (id) => db.boards.find((item) => item.id === id);

const createBoard = async ({ title, columns }) => {
  
  const columnsArr = columns.map((item) => ({
    ...item,   
  }));
  
  const boardData = new Board({
    title,
    columns: columnsArr,
  });

  db.boards.push(boardData);
  return boardData;
};

const updateBoard = async (id, board) => {
  const newBoard = { ...board, id };
  const boardIndex = db.boards.findIndex((item) => item.id === id);
  if (boardIndex !== -1) {
    db.boards[boardIndex] = newBoard;
    return newBoard;
  }
  return null;
};

const deleteBoard = async (id) => {
  const boardIndex = db.boards.findIndex((item) => item.id === id);
  if (boardIndex !== -1) {
    db.boards.splice(boardIndex, 1);
    return boardIndex;
  }
  return null;
};

module.exports = {
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
};

// const getAllBoards = async () => db.getAllBoards();

// const getBoard = async id => db.getBoard(id);

// const createBoard = async board => db.createBoard(board);

// const updateBoard = async (id, board) => db.updateBoard(id, board);

// const deleteBoard = async (id) => db.deleteBoard(id);

// module.exports = {
//   getAllBoards,
//   getBoard,
//   createBoard,
//   updateBoard,
//   deleteBoard,
// };
