import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import { useEffect } from "react";
import { useState } from "react";
import fetchCall from "../../functions/fetchCall";
import showSearch from "../../functions/showSearch";

const SearchResults = (props) => {
    const kw = props.match.params.kw;
    const apiKey = '16114ae4de5b070b88d780e31879af20';
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    let searchEndPoint = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-ES&sort_by=popularity.desc&page=1&query=${kw}`;
    
    useEffect(() => {
        fetchCall(searchEndPoint)
        .then (response => {            
            setData(response.results)
            setIsLoading(false)
        })
        .catch(error => console.log(error))
    }, [searchEndPoint])
      
    return <>
    <Container>
        <Row>
            {isLoading && !data && <LoadSpinner/>}           
           {!isLoading && data && showSearch(data)}
           {!isLoading && data.length === 0 && 
           <h3 className="text-center pt-4">No hay resultados para tu término de búsqueda.</h3>}
        </Row>
    </Container>
    </>
}
export default SearchResults;