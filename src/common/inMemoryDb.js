  const uuid = require('uuid').v4;
  const User = require('../resources/users/user.model');
  const Board = require('../resources/boards/board.model');
 // const Column = require('../resources/boards/columns.model');

  const DB1 = [
    { id: uuid(), title: 'board1', columns: ['task1', 'task2'] },
    { id: uuid(), title: 'board2', columns: ['task3', 'task4'] },
    new Board(),
  ];

const DB = [
  { id: uuid(), name: 'string1', login: 'string1', password: 'string1' },
  { id: uuid(), name: 'string2', login: 'string2', password: 'string2' },
  { id: uuid(), name: 'string3', login: 'string3', password: 'string3' },
  new User(),
];

// -------BOARDS
const getAllBoards = async () => [...DB1];

const getBoard = async id => DB1.find((el) => el.id === id);

const createBoard = async board => {
  DB1.push(board);
  return board;
}

const updateBoard = async (id, board) => {
  const list = DB1;
  const index = list.findIndex((v) => v.id === id);
  list[index] = board;
  return board;
};

const deleteBoard = async (id) => {
  const list = DB1;
  const index = list.findIndex((v) => v.id === id);

  await list.splice(index, 1);
};

// -------USERS
const getAllUsers = async () =>[...DB]; // TODO the deep copy

const getUser = async (id) => DB.find((el) => el.id === id);

const createUser = async (user) => {
  DB.push(user);
   return user;
};

const update = async (id, user) => {
  const list = DB;
  const index = list.findIndex((v) => v.id === id);
 list[index] = user;
  return user;
} 

const remove = async (id) => { 
  const list = DB;
  const index = list.findIndex((v) => v.id === id);

 await list.splice(index, 1);
}

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  update,
  remove,
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
};