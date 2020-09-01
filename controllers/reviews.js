const Game = require('../models/game');

module.exports = {
  create,
  delete: deleteReview,
  edit
};

function create(req, res) {
  Game.findById(req.params.id, function(err, game) {
    game.reviews.push(req.body);
    game.save(function(err) {
      res.redirect(`/games/${game._id}`);
    });
  });
}

function deleteReview(req, res) {
  Game.findOne({'reviews._id': req.params.id}, function(err, game) {
    const reviewSubdoc = game.reviews.id(req.params.id);
    reviewSubdoc.remove();
    game.save(function(err) {
      res.redirect(`/games/${game._id}`);
    });
  });
}

function edit(req, res) {
  Game.findOne({'reviews._id': req.params.id}, function(err, game) {
    if (err) {
      res.redirect(`/games/${game._id}`);
    }
    res.render('reviews/edit', { game, review: game.reviews.id })
  })
}