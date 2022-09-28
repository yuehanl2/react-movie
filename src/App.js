import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './components/pages/Homepage';
import MovieList from './components/pages/MovieList';
import LikeList from './components/pages/LikeList';
import BlockList from './components/pages/BlockList';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movielist" element={<MovieList />} />
          <Route path="/likelist" element={<LikeList />} />
          <Route path="/blocklist" element={<BlockList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
