import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MOCK_MOVIES = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    poster: "https://image.tmdb.org/t/p/w500/9gk7admal4zl22zb0s0t0g8g9.jpg",
    rating: 8.8,
    showtimes: ["10:00 AM", "1:00 PM"]
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 9.0,
    showtimes: ["11:00 AM", "2:00 PM"]
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "Sci-Fi",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    rating: 8.6,
    showtimes: ["9:30 AM", "3:30 PM"]
  },
  {
      id: 4,
      title: "Dune: Part Two",
      genre: "Sci-Fi",
      poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
      rating: 8.9,
      showtimes: ["10:30 AM", "4:30 PM", "8:00 PM"]
    }
];

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Try to fetch from backend, fallback to mock if fails (which it will on Github Pages)
    axios.get('http://localhost:5000/api/movies')
      .then(res => {
        setMovies(res.data);
        setLoading(false);
      })
      .catch(() => {
        console.log("Backend not reachable, using mock data");
        setMovies(MOCK_MOVIES);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-10 text-center">Loading Movies...</div>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Now Showing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {movies.map(movie => (
          <div key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
            <img src={movie.poster} alt={movie.title} className="w-full h-96 object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{movie.title}</h3>
                    <p className="text-gray-400 text-sm">{movie.genre}</p>
                  </div>
                  <span className="bg-yellow-500 text-black px-2 py-1 rounded font-bold text-sm">
                      {movie.rating}
                  </span>
              </div>
              
              <div className="mt-4">
                <p className="text-sm text-gray-300 mb-2">Showtimes:</p>
                <div className="flex flex-wrap gap-2">
                    {movie.showtimes.map(time => (
                        <button key={time} className="text-xs border border-red-500 text-red-500 px-2 py-1 rounded hover:bg-red-600 hover:text-white transition-colors">
                            {time}
                        </button>
                    ))}
                </div>
              </div>
              
              <button className="w-full mt-4 bg-red-600 py-2 rounded font-semibold hover:bg-red-700 transition-colors">
                  Book Tickets
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
