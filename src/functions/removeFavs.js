
const deleteFav = ( id, database ) => {
     database.forEach(( fav , i) => {
        if (fav.id === id) {
            database.splice(i, 1)
        }         
    })
    let updatedDB = JSON.stringify(database);
    return localStorage.setItem('favourites', updatedDB ) 
}

const removeFavs = (props) => {
    let db = JSON.parse(localStorage.getItem('favourites'))
    db.length > 1 ? deleteFav(props.id, db) : localStorage.removeItem('favourites')
}
export default removeFavs;