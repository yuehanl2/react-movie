
import { getConst } from '../constants';
import SortButton from '../components/sortButton';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';


export default function ListMove(props){

    

    return(<>
    <SortButton></SortButton>
    


        {/* {props.movieList.map((item=>
        <div style={{border:'2px solid black',margin:"10px"}}>
            <img alt='img' src={getConst.IMG_URL+item.poster_path} height={200} width={150}></img>
            <div key={item.id}>{item.title}</div>
            <div>relase Date: {item.release_date}</div>         
            <div>Vote count: {item.vote_count}</div>
            <div>Vote Average: {item.vote_average}</div>
        </div>))} */}
        
{props.movieList.map((movie=>
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
      <Card.Title>{movie.title}</Card.Title>
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
        
        </>))} 

    
    
    </>)
}

