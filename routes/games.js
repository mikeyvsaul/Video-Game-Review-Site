const express = require('express');
const router = express.Router();
const gamesCtrl = require('../controllers/games');

router.get('/', gamesCtrl.index);
router.get('/new', gamesCtrl.new);
router.post('/', gamesCtrl.create);
router.get('/:id', gamesCtrl.show);

module.exports = router;
