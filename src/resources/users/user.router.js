const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
 try {
   const user = await usersService.get(req.params.id);
   res.json(User.toResponse(user));
 } catch (e) {
  res.status(404).send(`The user was not found`);
 }  
});

router.route('/').post(async (req, res) => {
 const user =  await usersService.create(new User({ login: req.body.login, name: req.body.name, password: req.body.password }))
 res.status(201);
 res.json(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
 await usersService.remove(req.params.id);
  res.status(204).json(null);
});

router.route('/:id').put(async (req, res) => {
  try {
    const idUser = req.params.id;
    const newUser = {
      id: idUser,
      login: req.body.login,
      name: req.body.name,
      password: req.body.password,
    };
    await usersService.update(idUser, newUser);
    return res.status(200).send(User.toResponse(newUser));
  } catch (err) {  
    return res.status(404).end('such user not found');
  }

});

module.exports = router;
