const Game = require('../models/game');

module.exports = {
  index,
  new: newGame,
  create,
  show
};

function index(req, res) {
  Game.find({}, function(err, games) {
    res.render('games/index', { games });
  })
}

function newGame(req, res) {
  res.render('games/new')
}

function create(req, res) {
  let gameObj = {
    name: req.body.name,
    releaseYear: req.body.releaseYear
  };
  let reviewObj = {
    review: req.body.review
  }
  const game = new Game(gameObj);
  game.reviews.push(reviewObj);
  game.save(function(err) {
    if (err) return res.redirect('/games/new');
    res.redirect(`/games/${game._id}`);
  });
}

function show(req, res) {
  Game.findById(req.params.id, function(err, game) {
     res.render('games/show', { game })
  })
}