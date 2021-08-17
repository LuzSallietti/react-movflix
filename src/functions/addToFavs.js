const controlDuplicated = (database , movie) => {
    let duplicated = false;
    database.forEach(movieStored => {
        if(movieStored.id === movie.id ){
            duplicated = true;
        }        
    });
    if (!duplicated){
        return database.push(movie)
    }
}

const addToFavs = movieData => {  
    let db;      
    if (localStorage.getItem('favourites')) {
        let storedMovies = JSON.parse(localStorage.getItem('favourites'))
        if (storedMovies.length > 1){            
            db = JSON.parse(localStorage.getItem(`favourites`))
            controlDuplicated (db, movieData)          
        } else {
            db = JSON.parse(localStorage.getItem(`favourites`))
            if (db.id !== movieData.id){
                db=[db]
                db.push(movieData)
            }
        }     
        localStorage.setItem('favourites', JSON.stringify(db))
                
    } else {
        localStorage.setItem('favourites', JSON.stringify(movieData))
    }    
}

export default addToFavs;