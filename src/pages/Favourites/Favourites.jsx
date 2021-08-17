import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useState } from "react";
import { useEffect } from "react";
import showFavs from "../../functions/showFavs";


const Favourites = () => {
    const [favs, setFavs] = useState(null);
    const [storage, setStorage] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('favourites')){
            let db = JSON.parse(localStorage.getItem('favourites'))
            setFavs(db)            
            setStorage(true);
        }    
    }, []);   
    
    return <>
    <Container>
        <Row>        
        {!favs && !storage && <h3 className="text-center pt-4">Todavía no has añadido favoritos.</h3>}
        {favs && storage && showFavs(favs)}        
        </Row>
    </Container>   
    </>
}
export default Favourites;