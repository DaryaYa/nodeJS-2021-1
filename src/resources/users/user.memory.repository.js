// const User = require('./user.model');
const DB = require('../../common/inMemoryDb');

const getAll = async () => DB.getAllUsers();

const get = async(id) => {
 const user = await DB.getUser(id);
  if (!user) {
    throw new Error(`The user with id: ${id} was not found`)
  }
  return user;
}; 
// .find(el=> el.id === id);

const create = async user => DB.createUser(user);
  // DB.push(user); 
  // return get(user.id);

const update = async (id, user) => {
  const entity = await DB.update(id, user);
  if (!entity) {
    throw new Error(`The user with id: ${id} was not found`);
  }
  return entity;
}

const remove = async (id) => DB.remove(id);

module.exports = { getAll, get, create, update, remove };
