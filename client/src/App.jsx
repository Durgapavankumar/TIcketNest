import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <nav className="p-4 bg-black border-b border-gray-800">
          <div className="container mx-auto flex justify-between items-center">
             <h1 className="text-2xl font-bold text-red-600">TicketNest</h1>
             <div className="space-x-4">
               <a href="#" className="hover:text-red-500">Movies</a>
               <a href="#" className="hover:text-red-500">Theaters</a>
               <button className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">Login</button>
             </div>
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
