  const uuid = require('uuid').v4;
  const User = require('../resources/users/user.model');

const DB = [
  { id: uuid(), name: 'string1', login: 'string1', password: 'string1' },
  { id: uuid(), name: 'string2', login: 'string2', password: 'string2' },
  { id: uuid(), name: 'string3', login: 'string3', password: 'string3' },
  new User(),
];

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

module.exports = { getAllUsers, getUser, createUser, update, remove };