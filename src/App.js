import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MovieList from './containers/MovieList';
import LikeList from './containers/LikeList';
import Homepage from './containers/Homepage';
import Header from './components/Header';
import BlockList from './containers/BlockList';
import store from './Redux/store';

import './App.css';

function App() {

  const [movieList, setmovieList] = useState([]);
  const [likeList, setLikeList] = React.useState([])
  const [blockList, setBlockList] = React.useState([])
  const [blockedIdList, setBlockedIdList] = React.useState(new Set())



  const setLikeListFunction = (list) => {
    Array.isArray(list) && localStorage.setItem('likeList', JSON.stringify(list))
    Array.isArray(list) && setLikeList(list)
  }
  const setBlockListFunction = (list) => {
    Array.isArray(list) && localStorage.setItem('blockList', JSON.stringify(list))
    Array.isArray(list) && setBlockList(list)
  }
  useEffect(() => {
    
    try {
      const list = JSON.parse(localStorage.getItem('likeList'))
      if (Array.isArray(list)) {
        setLikeList(list)
      }
    } catch (e) {

    }
    try {
      const list = JSON.parse(localStorage.getItem('blockList'))
      Array.isArray(list) && setBlockList(list)
    } catch (e) {

    }
  }, []);



  useEffect(()=>{
    store.subscribe(() => {    
      let temp = [...store.getState().movieList];
      setmovieList(temp);
    });

  },[])

  useEffect(() => {
    const set = new Set(blockList.map(item => item.id))
    setBlockedIdList(set)
  }, [blockList])


  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/movielist"
            element={<MovieList
              movieList={movieList}
              likeList={likeList}
              setLikeListFunction={setLikeListFunction}
              blockList={blockList}
              setBlockListFunction={setBlockListFunction}
              blockedIdList={blockedIdList}
            />}
          />
          <Route path="/likelist" element={<LikeList
            movieList={movieList}
            likeList={likeList}
            setLikeListFunction={setLikeListFunction}
            blockList={blockList}
            setBlockListFunction={setBlockListFunction}
          />}

          />
          <Route path="/blocklist" element={<BlockList
            movieList={movieList}
            likeList={likeList}
            setLikeListFunction={setLikeListFunction}
            blockList={blockList}
            setBlockListFunction={setBlockListFunction}

          />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
