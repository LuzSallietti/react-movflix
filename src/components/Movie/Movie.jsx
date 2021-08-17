import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';
import { useHistory } from 'react-router';

const Movie = (props) => {
    const history = useHistory()
    const goBack= () => {
        history.goBack();        
    }    

    return <>
    <Container className="my-4">
        <Row>
            <Col md={4}>
                <img src={props.img} alt={props.alt} className="rounded img-thumbnail"></img>
            </Col>
            <Col md={8}>
                <h2>{props.title}</h2>
                <h5>Géneros</h5>
                <ul>
                    {props.genres.map((oneGenre,i) => {
                        return <li key={i}>{oneGenre.name}</li>
                    })}
                </ul>
                <h5>Reseña</h5>
                <p>{props.review}</p>
                <h5>Rating: {props.rating}</h5>                
                <div className="w-100 d-flex flex-row justify-content-between align-items-center pe-2">
                    <Button className= "btn btn-dark my-3" onClick={goBack}>Volver al listado</Button>                    
                </div> 
            </Col>
        </Row>
    </Container>
    </>
}
export default Movie;