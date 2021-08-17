import SearchCard from "../components/Search-Card/Search-Card"

const showSearch = movies => {
    return movies.map( oneMovie => {    
        return <SearchCard
        key = {oneMovie.id}
        id =  {oneMovie.id}
        img = {oneMovie.poster_path !== null?`https://image.tmdb.org/t/p/w500${oneMovie.poster_path}`: "https://via.placeholder.com/150x300?text=no+image+available"}
        title = {oneMovie.title}
        movie_desc = {oneMovie.overview ?`${oneMovie.overview.substr(0, 80).trim()}...` : 'Sin reseña'}
        />
    })
}
export default showSearch;