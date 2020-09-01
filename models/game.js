const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let reviewSchema = new Schema({
  review: String,
  gamer: {
    type: Schema.Types.ObjectId,
    ref: 'Gamer'
  }
}, {
  timestamps: true
});

let gameSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  releaseYear: Number,
  gamer: {
    type: Schema.Types.ObjectId,
    ref: 'Gamer'
  },
  reviews: [reviewSchema],
}, {
  timestamps: true
});

module.exports = mongoose.model('Game', gameSchema);