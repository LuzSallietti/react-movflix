import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import { useRef } from "react";
import { useHistory } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import addToFavs from "../../functions/addToFavs";

const HomeCard = (props) => {
    const moviedId = useRef(null);
    const heart = useRef(null);
    const history = useHistory();
    const getMovieId = () => history.push(`/detail/${moviedId.current.id}`);
    const [fav, setFav] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("favourites")) {
            let db = JSON.parse(localStorage.getItem("favourites"));
            if (db.length > 1) {
                db.forEach((movie) => {
                    if (movie.id === props.id) {
                        setFav(true);
                    }
                });
            } else {
                if (db.id === props.id) {
                    setFav(true);
                }
            }
        }
    }, [props.id]);

    return (
        <>
            <Col md={6} lg={3} className="my-2">
                <Card className="h-100" ref={moviedId} id={props.id}>
                    <Card.Img variant="top" src={props.img} />
                    <Card.Body className="d-flex justify-content-between align-items-start align-content-end flex-wrap">
                        <Card.Title className="w-100">{props.title}</Card.Title>
                        <Card.Text className="w-100 text-break">
                            {props.movie_desc}
                        </Card.Text>
                        <Button
                            variant="primary"
                            className="w-50"
                            type="submit"
                            onClick={getMovieId}
                        >
                            Ver detalle
                        </Button>
                        <div className="w-25 d-flex flex-row justify-content-end align-items-center pe-2">
                            <i
                                className={fav ? "fas fa-heart fs-4" : "far fa-heart fs-4"}
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
};
export default HomeCard;
