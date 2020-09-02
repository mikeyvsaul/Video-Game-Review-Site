const Game = require('../models/game');
const game = require('../models/game');

module.exports = {
  index,
  new: newGame,
  create,
  show,
  delete: deleteGame
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
    releaseYear: req.body.releaseYear,
    boxArt: req.body.boxArt,
    gamer: req.user._id
  };
  let reviewObj = {
    review: req.body.review,
    gamer: req.user._id
  }
  const game = new Game(gameObj);
  // game.gamer = req.user._id;
  game.reviews.push(reviewObj);
  game.save(function(err) {
    if (err) return res.redirect('/games/new');
    res.redirect(`/games/${game._id}`);
  });
}

function show(req, res) {
  Game.findById(req.params.id, function(err, game) {
     res.render('games/show', { game, reviews: game.reviews })
  })
}

function deleteGame(req, res) {
  Game.findByIdAndDelete(req.params.id, function(err) {
    res.redirect('/games');
  });
}