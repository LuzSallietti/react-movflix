import { useState } from "react";
import { useEffect } from "react";
import fetchCall from "../../functions/fetchCall";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import showDetail from "../../functions/showDetail";

const MovieDetail = (props) => {
    const id = props.match.params.id;
    const apiKey = '16114ae4de5b070b88d780e31879af20';
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const detailEndPoint = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es-ES`;

    useEffect(() => {
        fetchCall(detailEndPoint)
        .then(response => {                      
            setData(response)
            setIsLoading(false)     
        })
        .catch(error => console.log(error))
    }, [detailEndPoint])

    return <>
    {isLoading && !data && <LoadSpinner/>}
    {!isLoading && data && 
        showDetail(data) }
    </>
}
export default MovieDetail;