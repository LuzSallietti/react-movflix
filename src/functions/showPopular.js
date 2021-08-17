import HomeCard from "../components/Home-Card/Home-Card"

const showPopular = (movies) => {
    return movies.map(oneMovie => {
        return  <HomeCard
        key={oneMovie.id}
        id={oneMovie.id} //agregar en las props del componente?
        img= {oneMovie.poster_path !== null ? `https://image.tmdb.org/t/p/w500${oneMovie.poster_path}`: "https://via.placeholder.com/150x300?text=no+image+available"}
        title= {oneMovie.title}
        movie_desc={`${oneMovie.overview.substr(0, 80).trim()}...`}               
        />
    })
}
export default showPopular;