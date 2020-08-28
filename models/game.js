const mongoose = require('mongoose');
const { schema } = require('./gamer');
const Schema = mongoose.Schema;

let reviewSchema = new Schema({
  review: String,
  gamer: {
    type: Schema.Types.ObjectId,
    ref: 'gamer'
  }
}, {
  timestamps: true
}
)

let gameSchema = new Schema({
  name: String,
  reviews: [reviewSchema],
}, {
  timestamps: true
})

module.exports = mongoose.model('Game', gameSchema);