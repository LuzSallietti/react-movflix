import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { useRef } from "react";
import { useHistory } from "react-router";
import addToFavs from "../../functions/addToFavs";

const SearchCard = (props) => {
  const moviedId = useRef(null);
  const heart = useRef(null);
  const history = useHistory();
  const getMovieId = () => history.push(`/detail/${moviedId.current.id}`);

  return (
    <>
      <Col md={6} lg={3}>
        <Card className="h-100" id={props.id} ref={moviedId}>
          <Card.Img variant="top" src={props.img} />
          <Card.Body className="d-flex justify-content-between align-items-start align-content-end flex-wrap">
            <Card.Title className="w-100">{props.title}</Card.Title>
            <Card.Text className="w-100 text-break d-none">
              {props.movie_desc}
            </Card.Text>
            <Button
              variant="primary"
              className="w-auto"
              type="submit"
              onClick={getMovieId}
            >
              Ver detalle
            </Button>
            <div className="w-auto d-flex flex-row justify-content-end align-items-center pe-2">
              <i
                className="far fa-heart fs-4"
                ref={heart}
                onClick={() => {
                  addToFavs(props);
                  heart.current.className = "fas fa-heart fs-4";
                }}
              ></i>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
export default SearchCard;