import React from 'react';
import '../../App.css';

import { connect } from 'react-redux';
import { fetchMovies } from '../../actions';
// import SortButton from './UIComponents/SortButton';

// React Bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

class MovieList extends React.Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  // render each movie card
  renderList() {
    return this.props.movies.map((movie) => {
      return (
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
              src={`${IMG_URL + movie.poster_path}`}
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
                <span>{movie.vote_average}</span>
              </Card.Title>
              <Card.Text
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                {' '}
                {movie.release_date}{' '}
                <span>
                  <Button variant="outline-danger" size="sm">
                    Like
                  </Button>{' '}
                  <Button variant="outline-primary" size="sm">
                    Block
                  </Button>
                </span>
              </Card.Text>
              <Card.Text style={{ fontSize: '14px' }}>
                {movie.overview}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.movies);
    return (
      <div className="wrapper">
        {/* <SortButton /> */}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.movies);
  return { movies: state.movies };
};

export default connect(mapStateToProps, { fetchMovies })(MovieList);
