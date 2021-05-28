const router = require('express').Router();
const boardService = require('./board.service');
const Board = require('./board.model');

router.route('/').get(async (req, res) => {
  try {
    const boards = await boardService.getAll();
    res.status(200).json(boards);
  } catch (err) {
    console.error(err.message);
    res.status(404).send(`The board was not found`);
  }
});

router.route('/:boardId').get(async (req, res) => {
  try {
    const board = await boardService.getBoard(req.params.boardId);
    res.status(200).json(Board.toResponse(board));
  } catch (error) {
    res.status(404).send(`The board was not found`);
  }
});

router.route('/').post(async (req, res) => {
  try {
    const board = await boardService.createBoard(req.body);
    res.status(201).json(Board.toResponse(board));
  } catch (error) {
    res.status(404).send(`The board was not found`);
  }
});

router.route('/:boardId').put(async (req, res) => {
  try {
    const data = req.body;
    const { boardId } = req.params;
    const board = await boardService.updateBoard(boardId, data);
    res.status(200).json(Board.toResponse(board));
  } catch (error) {
    res.status(404).send(`The board was not found`);
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    await boardService.deleteBoard(req.params.id);
    res.status(204).json(null);
  } catch (error) {
    res.status(404).send(`The board was not found`);
  }
});

module.exports = router;

// const router = require('express').Router({ mergeParams: true });
// const Board = require('./board.model');
// const boardsService = require('./board.service');

// router.route('/').get(async (req, res) => {
//   try {
//     const boards = await boardsService.getAllBoards();
//     res.status(200).send(boards.map(Board.toResponse));
//   } catch (err) {
//     res.status(404).end('not found');
//   }
//   // const boards = await boardsService.getAllBoards();
//   // res.json(boards.map(Board.toResponse));
// });

// router.route('/:id').get(async (req, res) => {
//   try {
//     const board = await boardsService.getBoard(req.params.id);
//     res.json(Board.toResponse(board));
//   } catch (e) {
//     res.status(404).send(`The board was not found`);
//   }
// });

// router.route('/').post(async (req, res) => {
//   const board = await boardsService.createBoard(
//     new Board({
//       title: req.body.title,
//       columns: req.body.columns,
//     })
//   );
//   res.status(201);
//   res.json(Board.toResponse(board));
// });

// router.route('/:id').delete(async (req, res) => {
//   await boardsService.deleteBoard(req.params.id);
//   res.status(204).json(null);
// });

// router.route('/:id').put(async (req, res) => {
//   try {
//     const idBoard = req.params.id;
//     const newBoard = {
//       id: idBoard,
//       title: req.body.title,
//       columns: req.body.columns,
//     };
//     await boardsService.updateBoard(idBoard, newBoard);
//     return res.status(200).send(Board.toResponse(newBoard));
//   } catch (err) {
//     return res.status(404).end('such Board is not found');
//   }
// });

// module.exports = router;
