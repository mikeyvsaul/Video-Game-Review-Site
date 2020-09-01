const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gamerSchema = new Schema({
  name: String,
  email: String,
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Gamer', gamerSchema);