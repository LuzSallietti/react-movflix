import Movie from "../components/Movie/Movie"
const showDetail = (movie) => {
    return <>
        <Movie
        id={movie.id}
        img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.original_title}
        title={movie.original_title}
        genres = {movie.genres}
        review = {movie.overview ? movie.overview : 'Sin reseña'} 
        rating = {movie.vote_average}    
        />
    </>
}
export default showDetail;