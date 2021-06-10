import './App.css';
import { Route, HashRouter as Router, Link, Switch } from "react-router-dom";
import StartScreen from './components/StartScreen';
import Filminfo from './components/Filminfo';
import Checkout from './components/Checkout';
import FilmCategory from './components/FilmCategory';
import Favorites from './components/Favorites';
import SearchMovies from './components/SearchMovies';
import UpcomingMovies from './components/UpcomingMovies';
import KidsMovies from './components/KidsMovies'
import Receipt from './components/Receipt'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MenuIcon from '@material-ui/icons/Menu';
import Modal from './components/Modal'
import zIndex from '@material-ui/core/styles/zIndex';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const count = useSelector(state => state.cart.count);

  return (

    <div className="App">
      <div className="app-wrap">
        <header className="App-header">
          <div className="nav-bar" id="nav-container">
            <Router basename={process.env.PUBLIC_URL}>
              <Link to="/startScreen"><button className="nav-home-button" id="nav-btn-home">Movieblock</button></Link>
              <Link to="/filmCategory"><button className="nav-button" id="nav-btn-categories">Kategorier</button></Link>
              <Link to="/kidsmovies"><button className="nav-button" id="nav-btn-movies">Barnfilmer</button></Link>
              <Link to="/upcoming"><button className="nav-button" id="nav-btn-movies">Kommande</button></Link>
              <input type="text" className="search-field" placeholder="Sök"></input>
              <Link to="/search"><IconButton aria-label="search"><SearchIcon style={{ fill: '#000000' }} /></IconButton></Link>
              <div className="header-shoppingcart">
                <IconButton aria-label="shop"><ShoppingBasketIcon style={{ fill: '#000000' }} onClick={() => setIsOpen(true)} /></IconButton>
                <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
                <div className="header-counter" hidden={count===0}>{count}</div>
              </div>
            </Router>
          </div>
          {/*<a href="javascript:void(0);" className="burger-icon" onclick="myFunction()">
          <IconButton aria-label="shop"><MenuIcon style={{ fill: '#000000' }} /></IconButton>
          </a>*/}
        </header>
        <main>
          <div className="App">
            <Router>
              <Switch>
                <Route exact path="/">
                  <StartScreen />
                </Route>
                <Route path="/startscreen">
                  <StartScreen />
                </Route>
                <Route path="/filmcategory">
                  <FilmCategory />
                </Route>
                <Route path="/kidsmovies">
                  <KidsMovies />
                </Route>
                <Route path="/upcoming">
                  <UpcomingMovies />
                </Route>
                <Route path="/favorites">
                  <Favorites />
                </Route>
                <Route path="/filminfo/:id">
                  <Filminfo />
                </Route>
                <Route path="/search">
                  <SearchMovies />
                </Route>
                <Route path="/shoppingcart">
                  <Checkout />
                </Route>
                <Route path="/receipt">
                  <Receipt />
                </Route>
              </Switch>
            </Router>
          </div>
        </main>
      </div>
      <footer>
        <div className="footer">
          <p> © Movieblock AB 2021 support@movieblock.se</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
