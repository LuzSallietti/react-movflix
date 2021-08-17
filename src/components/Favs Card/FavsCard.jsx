import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import { useRef } from 'react';
import { useHistory } from 'react-router';
import removeFavs from '../../functions/removeFavs';

const FavsCard = (props) => {
    const heart = useRef(null)
    const moviedId = useRef(null);    
    const history = useHistory();
    const getMovieId = () =>  history.push(`/detail/${moviedId.current.id}`);

    return <>
    <Col md={6} lg={3} className="my-2">
        <Card className="h-100" id= {props.id} ref={moviedId}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body className="d-flex justify-content-between flex-wrap">
                <Card.Title className="w-100">{props.title}</Card.Title>
                <Card.Text className="w-100">
                {props.movie_desc}
                </Card.Text>
                <Button variant="primary" className="w-50" onClick={ getMovieId }>Ver detalle</Button>
                <div className="w-25 d-flex flex-row justify-content-end align-items-center pe-2">
                    <i className="fas fa-heart fs-4" ref={heart} onClick={() => {
                        removeFavs(props)
                        heart.current.className="far fa-heart fs-4"
                        window.location.reload()
                        }}></i>
                </div> 
            </Card.Body>
        </Card>
    </Col>
    </>
}
export default FavsCard;