import React, { useState,useEffect } from 'react';
import store from '../Redux/store';
import { actions } from '../Redux/actionCreator';
import Spinner from 'react-bootstrap/Spinner';


import { getConst } from '../constants';
import SortButton from '../components/sortButton';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function MovieList(props) {

  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // props.setLikeListFunction([2])
  const clickLike = (moive) => {
    const list = [...props.likeList]
    const thisMoiveIndex = list.findIndex(item => {
      return item.id === moive.id
    })
    if (thisMoiveIndex === -1) {
      list.push(moive)
    } else {
      list.splice(thisMoiveIndex,1)
    }    
    props.setLikeListFunction(list)
  }
  const clickBlock = (moive) => {
    const list = [...props.blockList]
    const thisMoiveIndex = list.findIndex(item => {
      return item.id === moive.id
    })
    if (thisMoiveIndex === -1) {
      list.push(moive)
    } else {
      list.splice(thisMoiveIndex,1)
    }    
    props.setBlockListFunction(list)
  }

  useEffect(() => {
    // console.log("movieList changedpage"+page)
    setIsLoading(true);
    // console.log("Is loading: "+isLoading)
    store.dispatch(actions.fetchMovie(getConst.API_URL+page,page))

  }, [page]);

  useEffect(()=>{

    store.subscribe(()=>{
      // console.log("subscribe "+store.getState().isLoading)
      setIsLoading(store.getState().isLoading)
      

    })

  },[])

  if (isLoading) {
    return (
      <div className="loader">
        <Spinner animation="border" />
      </div>
    );
  }



  return (
    <>



      <SortButton />
      <div className="buttonGroup">
      {page!==1? <Button className="sortButton"
          variant="outline-secondary" onClick={()=>{setPage(page-1)}}>←</Button>:<Button className="sortButton"
          variant="outline-secondary" disabled={true}></Button>}
      
      {page}
      <Button className="sortButton"
          variant="outline-secondary" onClick={()=>{setPage(page+1)}}>→</Button>
          </div>
      <div className="wrapper">
        {props.movieList.filter(movie => !props.blockedIdList.has(movie.id)).map((movie) => (
          <>
            <div className="item" key={movie.id}>
              <Card
                key={movie.id}
                style={{
                  height: '65vh',
                  padding: '4px',
                  overflow: 'scroll',
                  marginBottom: '2em',
                }}
              >
                <Card.Img
                  variant="top"
                  src={`${getConst.IMG_URL + movie.poster_path}`}
                  style={{
                    width: '100%',
                    height: '45vh',
                    objectFit: 'cover',
                    padding: '8px',
                  }}
                />
                <Card.Body>
                <Card.Title
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                {movie.title}
                <span>
                  {' '}
                  {movie.vote_average} {'/'} {movie.vote_count}
                </span>
              </Card.Title>

                  <Card.Text
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    {' '}
                    {movie.release_date}{' '}

                    <span>
                    <span>&#128150;</span>
                      <Button variant="outline-danger" size="sm" onClick={() => {clickLike(movie)}}>
                        {props.likeList.findIndex(item => item.id === movie.id) === -1 ?'Like':'Dislike'}
                      </Button>{' '}
                      <span>&#128153;</span>
                      <Button variant="outline-primary" size="sm" onClick={() => {clickBlock(movie)}}>
                        {/* block */}
                        {props.blockList.findIndex(item => item.id === movie.id) === -1?'Block':'Unblock'}
                      </Button>
                    </span>
                  </Card.Text>
                  <Card.Text style={{ fontSize: '14px' }}>
                    {movie.overview}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
