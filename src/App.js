import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import { Switch } from 'react-router';
import Home from './pages/Home/Home';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import Favourites from './pages/Favourites/Favourites';
import SearchResults from './pages/SearchResults/SearchResults';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header/>  
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/detail/:id" component={MovieDetail}/>
        <Route path="/favs" component={Favourites}/>
        <Route path="/search/:kw" component={SearchResults}/> 
      </Switch>
      <Footer/>   
    </Router>          
  );
}

export default App;
