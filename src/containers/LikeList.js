import { getConst } from '../constants';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function LikeList(props) {
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
  return (
    <>
      {/* <SortButton /> */}
      <div className="wrapper">
        {props.likeList.map((movie) => (
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
                    <span>{movie.vote_average}</span>
                  </Card.Title>

                  <Card.Text
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    {' '}
                    {movie.release_date}{' '}
                    <span>
                      <Button variant="outline-danger" size="sm" onClick={() => {clickLike(movie)}}>
                        {props.likeList.findIndex(item => item.id === movie.id) === -1 ?'Like111':'Dislike'}
                      </Button>{' '}
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


// export default LikeList;
