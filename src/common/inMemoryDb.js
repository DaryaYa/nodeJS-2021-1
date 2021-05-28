  const uuid = require('uuid').v4;
  const User = require('../resources/users/user.model');
  const Board = require('../resources/boards/board.model');
  const Task = require('../resources/tasks/task.model');
 // const Column = require('../resources/boards/columns.model');

 const db = {
    tasks: [ // ------tasks db
   { id: uuid(), title: 'title1', order: 0, description: 'description-1', userId: 'USER_ID-1', boardId: 'BOARDER_ID-1', columnId: 'COLUMN_ID-1' },
   { id: uuid(), title: 'title2', order: 1, description: 'description-1', userId: 'USER_ID-1', boardId: 'BOARDER_ID-2', columnId: 'COLUMN_ID-2' },
   new Task()],
   boards:  [ // ------boards db
    { id: uuid(), title: 'board1', columns: ['task1', 'task2'] },
    { id: uuid(), title: 'board2', columns: ['task3', 'task4'] },
    new Board(),
  ],
  users: [
     { id: uuid(), name: 'string1', login: 'string1', password: 'string1' },
  { id: uuid(), name: 'string2', login: 'string2', password: 'string2' },
  { id: uuid(), name: 'string3', login: 'string3', password: 'string3' },
  new User(),
  ]
 }




// -------BOARDS
const getAllBoards = async () => [...db.boards];

const getBoard = async (id) => db.boards.find((el) => el.id === id);

const createBoard = async board => {
  db.boards.push(board);
  return board;
}

const updateBoard = async (id, board) => {
  const list = db.boards;
  const index = list.findIndex((v) => v.id === id);
  list[index] = board;
  return board;
};

const deleteBoard = async (id) => {
  const list = db.boards;
  const index = list.findIndex((v) => v.id === id);

  await list.splice(index, 1);
};

// -------USERS
const getAllUsers = async () =>[...db.users]; // TODO the deep copy

const getUser = async (id) => db.users.find((el) => el.id === id);

const createUser = async (user) => {
  db.users.push(user);
   return user;
};

const update = async (id, user) => {
  const list = db.users;
  const index = list.findIndex((v) => v.id === id);
 list[index] = user;
  return user;
} 

const remove = async (id) => { 
  const list = db.users;
  const index = list.findIndex((v) => v.id === id);

 await list.splice(index, 1);
}

// -------TASKS  
const getAllTasks = async (boardId) => {
  const currentBoard = await getBoard(boardId);

  // if (!currentBoard) throw new Error('Error get tasks: tasks not found');
  return currentBoard;
};

const getTask = async (boardId, taskId) => {
  
   const task = await getAllTasks.columns.find((el) => el.id === taskId);

   return task;
 
}

const createTask = (task) => {
  db.tasks.push(task);
};

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
  getAllTasks,
  getTask,
  createTask,
};