const { db } = require('../db');
const Board = require('./board.model');

/** 
 * This function creates a list of all boards
 * @function
 * @returns {Object[]} The list of all boards
 */
const getAllBoards = async () => db.boards;

/** 
 * This function finds a board by ID
 * @param {string} id - board id
 * @returns {Object} The board by id
 */
const getBoard = async (id) => db.boards.find((item) => item.id === id);

/** 
 * This function creates a board with the given data
 * @param {string} title - board title
 * @param {Object[]} columns - all columns on the board 
 * @returns {Object} The newly created board 
 */
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

/** 
 * This function updates a board by ID with the given data
 * @param {string} id - board id
 * @param {Object} board - object with new board's data
 * @returns {Object} The updated board 
 */
const updateBoard = async (id, board) => {
  const newBoard = { ...board, id };
  const boardIndex = db.boards.findIndex((item) => item.id === id);
  if (boardIndex === -1) return null;
    db.boards[boardIndex] = newBoard;
    return newBoard;
};

/** 
 * This function deletes a board by ID
 * @param {string} id - board id
 * @returns {number} The index of a deleted board
 */
const deleteBoard = async (id) => {
  const boardIndex = db.boards.findIndex((item) => item.id === id);
  if (boardIndex === -1) return null;
    db.boards.splice(boardIndex, 1);
    return boardIndex;
};

module.exports = {
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
};
