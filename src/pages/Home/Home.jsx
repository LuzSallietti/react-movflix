import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/esm/Container";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import fetchCall from "../../functions/fetchCall";
import { useState } from "react";
import { useEffect } from "react";
import showPopular from '../../functions/showPopular';

const Home = () => {
    const apiKey = '16114ae4de5b070b88d780e31879af20';
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const popularEndPoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es-ES&sort_by=popularity.desc&page=1`;

    useEffect(() => {
        fetchCall(popularEndPoint)
        .then(response => {                       
            setData(response.results)
            setIsLoading(false)     
        })
        .catch(error => console.log(error))
    }, [popularEndPoint])

    return <>
    {isLoading && !data && <LoadSpinner/>}
    {!isLoading && data && <Container>               
        <Row>                            
            { showPopular(data) }           
        </Row>
    </Container>}     
    </>
}
export default Home;