const router = require('express').Router({ mergeParams: true });
const taskService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await taskService.getAll(req.params.boardId);

  res.status(tasks ? 200 : 404).json(tasks);
});

router.route('/:taskId').get(async (req, res) => {
  const { boardId, taskId } = req.params;

  const task = await taskService.getTask(boardId, taskId);

  res.status(task ? 200 : 404).json(task);
});

router.route('/').post(async (req, res) => {
  const task = await taskService.createTask(req.params.boardId, req.body);
  res.status(task ? 201 : 404).json(task);
});

router.route('/:taskId').put(async (req, res) => {
  const data = req.body;
  const { boardId, taskId } = req.params;
  const task = await taskService.updateTask(boardId, taskId, data);
  res.status(task ? 200 : 404).json(task);
});
router.route('/:taskId').delete(async (req, res) => {
  const task = await taskService.deleteTask(req.params.taskId);
  res.status(task !== null ? 200 : 404).json({});
});

module.exports = router;

// const router = require('express').Router({ mergeParams: true });
// const Task = require('./task.model');
// const tasksService = require('./task.service');

// router.route('/').get(async (req, res) => {
//   try {
//     const tasksByBoard = await tasksService.getAllTasks(req.params.boardId);
//     res
//       .status(200)
//       .send(tasksByBoard.columns.map((task) => Task.toResponse(task)));
//   } catch (err) {
//     res.status(404).end('nifiga ne rabotaet');
//   }
// });

// router.route('/:taskId').get(async (req, res) => {
//   const task = await tasksService.get(req.params.boardId, req.params.taskId);
//   if (task) {
//     res.status(200).send(Task.toResponse(task));
//   } else res.status(404).end('not found');
// });

// router.route('/').post(async (req, res) => {
//   const newTask = new Task({
//     title: req.body.title,
//     order: req.body.order,
//     description: req.body.description,
//     userId: req.body.userId,
//     boardId: req.params.boardId,
//     columnId: req.body.columnId,
//   });
//   const task = await tasksService.create(newTask);
//   if (task) {
//     res.status(200).send(Task.toResponse(task));
//   } else res.status(404).end('not found');
// });

// module.exports = router;
