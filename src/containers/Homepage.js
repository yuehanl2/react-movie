import React, { useState, useEffect } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';
import '../App.css';
import { getConst } from '../constants';

function Homepage() {
  const [imgs, setImags] = useState([]);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      fetchHeros();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const fetchHeros = async () => {
    try {
      const res = await fetch(getConst.API_URL);
      const data = await res.json();
      setImags(data.results.slice(0, 5));
      // console.log(imgs);
      setIsLoading(false);
    } catch (err) {
      // console.log(err);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="loader">
        <Spinner animation="border" />
      </div>
    );
  }

  const handleSelect = () => {
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className="carousel">
      <Carousel
        onSelect={handleSelect}
        variant="dark"
        style={{
          margin: 'auto',
          width: '85%',
          height: '80%',
          marginTop: '2em',
          opacity: '0.9',
        }}
      >
        <Carousel.Item interval={3000}>
          {/* <Button>&lt;</Button> */}
          {imgs.length !== 0 && (
            <img
              className="sd-block w-100"
              src={`${getConst.IMG_URL + imgs[index].backdrop_path}`}
              alt="slide"
            />
          )}
          <Carousel.Caption>
            {' '}
            <h5>{imgs.length !== 0 && imgs[index].title}</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Homepage;
