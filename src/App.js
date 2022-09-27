import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MovieList from './containers/MovieList';
import LikeList from './containers/LikeList';
import Homepage from './containers/Homepage';
import Header from './components/Header';
import BlockList from './containers/BlockList';
import store from './Redux/store';
import { getConst } from './constants';





import './App.css';

function App() {
  useEffect(()=>{
    store.subscribe(()=>{
        let temp = [...store.getState().movieList]
        setmovieList(temp)         
    })

},[])

  const [movieList,setmovieList] = useState(getConst.movieListTemp)

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/movielist" element={<MovieList movieList={movieList}/>} />
          <Route path="/likelist" element={<LikeList />} />
          <Route path="/blocklist" element={<BlockList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;




