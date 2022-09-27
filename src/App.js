import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MovieList from './components/MovieList';
import LikeList from './components/LikeList';
import Homepage from './components/Homepage';
import Header from './components/Header';
import BlockList from './components/BlockList';

import { selectMovie } from './actions';

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
