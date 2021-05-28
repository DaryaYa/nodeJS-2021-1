const usersRepo = require('./user.memory.repository');
const tasksService = require('../tasks/task.service');

const getAll = () => usersRepo.getAll();

const getUser = (id) => usersRepo.getUser(id);

const createUser = (user) => usersRepo.createUser(user);

const updateUser = (id, user) => usersRepo.updateUser(id, user);

const deleteUser = (id) => {
  tasksService.unassignUserTask(id);
  return usersRepo.deleteUser(id);
};

module.exports = {
  getAll,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};

// const usersRepo = require('./user.memory.repository');

// const getAll = () => usersRepo.getAll();

// const get = id => usersRepo.get(id);

// const create = user => usersRepo.create(user);

//  const update = (id, user) => usersRepo.update(id, user);

//  const remove = id => usersRepo.remove(id);

// module.exports = { getAll, get, create, update, remove };
