const Game = require('../models/game');

module.exports = {
  index
}

function index(req, res) {
  Game.find({}, function(err, games) {
    res.render('games/index', { games });
  })
}