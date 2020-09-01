const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let reviewSchema = new Schema({
  review: String,
  gamer: {
    type: Schema.Types.ObjectId,
    ref: 'gamer'
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
  reviews: [reviewSchema],
}, {
  timestamps: true
});

module.exports = mongoose.model('Game', gameSchema);