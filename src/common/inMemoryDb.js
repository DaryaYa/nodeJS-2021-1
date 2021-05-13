const User = require('../resources/users/user.model');

let DB = [];

DB.push(new User(), new User(), new User());

const getAllUsers = async () =>[...DB]; // TODO the deep copy

const getUser = async (id) => DB.find((el) => el.id === id);

const createUser = async (user) => {
  DB.push(user);
  return getUser(user.id);
  // return user;
};

 // const deleteUser = async id => DB.filter((el)=> el.id !== id);

const updateUser = async (id, user) => {
  const oldUser = getUser(id);
  if (oldUser) {
    const ind = DB.indexOf(oldUser)
    DB[ind] = { ...user };
  }
  return getUser(id);
} 

const deleteUser = async (id) => {
  const user = getUser(id);
  if (user) {
    const ind = DB.indexOf(user);
    DB = [...DB.slice(0, ind),
      ...(DB.length > ind + 1 ? DB.slice(ind +1) : [])
    
    ]
  }
  return user;
}


module.exports = { getAllUsers, getUser, createUser, updateUser, deleteUser };