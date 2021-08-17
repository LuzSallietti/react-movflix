import FavsCard from "../components/Favs Card/FavsCard"

const showFavs = (favourites) => {   
        if (Array.isArray(favourites)) {
             return favourites.map((oneFav, index) => {
                    return <FavsCard
                    key={`movie-${index}`}
                    id={oneFav.id}
                    img={oneFav.img}
                    title={oneFav.title}
                    movie_desc={oneFav.movie_desc}
                />
            })
        } else {
            return <FavsCard        
            id={favourites.id}
            img={favourites.img}
            title={favourites.title}
            movie_desc={favourites.movie_desc}
        />
        }    
}
export default showFavs;