// const uuid = require('uuid');
 const User = require('./user.model');

const { db } = require('../db');

// const { users } = db;

const getAll = async () => db.users;

const getUser = async (id) => db.users.find((item) => item.id === id);

const createUser = async ({ name, login, password }) => {
   if (!db.users) {
     db.users = [];
   }
 const user = new User({
   name,
   login,
   password,
 });

  db.users.push(user);
  return user;
};

const updateUser = async (id, user) => {
  const list = db.users;
  const index = list.findIndex((v) => v.id === id);
  list[index] = user;
  return user;
};

const deleteUser = async (id) => {
   const list = db.users;
   const index = list.findIndex((v) => v.id === id);
   await list.splice(index, 1);
};

module.exports = {
  getAll,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};


// const getAll = async () => db.getAllUsers();

// const get = async(id) => {
//  const user = await db.getUser(id);
//   if (!user) {
//     throw new Error(`The user with id: ${id} was not found`)
//   }
//   return user;
// }; 
// // .find(el=> el.id === id);

// const create = async user => db.createUser(user);
//   // DB.push(user); 
//   // return get(user.id);

// const update = async (id, user) => {
//   const entity = await db.update(id, user);
//   if (!entity) {
//     throw new Error(`The user with id: ${id} was not found`);
//   }
//   return entity;
// }

// const remove = async (id) => db.remove(id);

// module.exports = { getAll, get, create, update, remove };
