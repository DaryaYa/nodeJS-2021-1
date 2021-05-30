 const User = require('./user.model');

const { db } = require('../db');

/** 
 * This function creates a list of all users
 * @function
 * @returns {Object[]} The list of all users
 */
const getAll = async () => db.users;

/** 
 * This function finds a user by ID
 * @param {string} id - user id
 * @returns {Object} The user by id
 */
const getUser = async (id) => db.users.find((item) => item.id === id);

/** 
 * This function creates a user with the given data
 * @param {string} name - user name
 * @param {string} login - user login
 * @param {string} password - user password
 * @returns {Object} The newly created user 
 */
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

/** 
 * This function updates a user by ID with the given data
 * @param {string} id - user id
 * @param {Object} user - object with new user's data
 * @returns {Object} The updated user 
 */
const updateUser = async (id, user) => {
  const list = db.users;
  const index = list.findIndex((v) => v.id === id);
  list[index] = user;
  return user;
};

/** 
 * This function deletes a user by ID
 * @param {string} id - user id
 */
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

