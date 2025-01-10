const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock Database (Since we can't guarantee local Mongo)
let movies = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    poster: "https://image.tmdb.org/t/p/w500/9gk7admal4zl22zb0s0t0g8g9.jpg",
    rating: 8.8,
    showtimes: ["10:00 AM", "1:00 PM", "4:00 PM"]
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 9.0,
    showtimes: ["11:00 AM", "2:00 PM", "5:00 PM"]
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "Sci-Fi",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    rating: 8.6,
    showtimes: ["9:30 AM", "12:30 PM", "3:30 PM"]
  }
];

// Routes
app.get('/api/movies', (req, res) => {
  res.json(movies);
});

app.get('/api/movies/:id', (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).json({ message: 'Movie not found' });
  res.json(movie);
});

app.post('/api/bookings', (req, res) => {
  const { movieId, seats, showtime } = req.body;
  // In a real app, save to DB
  console.log(`Booking received for Movie ${movieId}, Time: ${showtime}, Seats: ${seats}`);
  res.status(201).json({ message: 'Booking confirmed!', bookingId: Math.floor(Math.random() * 10000) });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
