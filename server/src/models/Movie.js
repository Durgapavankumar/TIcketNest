const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  poster: { type: String, required: true },
  rating: { type: Number, default: 0 },
  showtimes: [{ type: String }]
});

module.exports = mongoose.model('Movie', movieSchema);
