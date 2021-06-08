import './App.css';
import { Route, HashRouter as Router, Link, Switch } from "react-router-dom";
import StartScreen from './components/StartScreen';
import Filminfo from './components/Filminfo';
import Login from './components/Login';
import Register from './components/Register';
import Shoppingcart from './components/Shoppingcart';
import Checkout from './components/Checkout';
import FilmCategory from './components/FilmCategory';
import Favorites from './components/Favorites';
import SearchMovies from './components/SearchMovies';
import UpcomingMovies from './components/UpcomingMovies';
import KidsMovies from './components/KidsMovies'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';



function App() {

  return (

    <div className="App">
      <div className="app-wrap">
        <header className="App-header">
          <div className="nav-bar" id="nav-container">
            <Router basename={process.env.PUBLIC_URL}>
              <Link to="/startScreen"><button className="nav-button" id="nav-btn-home">Movieblock</button></Link>
              <Link to="/filmCategory"><button className="nav-button" id="nav-btn-categories">Kategorier</button></Link>
              <Link to="/kidsmovies"><button className="nav-button" id="nav-btn-movies">Barnfilmer</button></Link>
              <Link to="/upcoming"><button className="nav-button" id="nav-btn-movies">Kommande</button></Link>
              <Link to="/favorites"><button className="nav-button" id="nav-btn-favorites">Favoriter</button></Link>
              <input type="text" className="search-field" placeholder="Sök"></input>
              <Link to="/search"><IconButton aria-label="search"><SearchIcon style={{ fill: '#000000' }} /></IconButton></Link>
              <Link to="/shoppingcart">
                <div className="header-shopingcart">
                  <img className="nav-img" id="nav-symbol-shopcart" src="assets/shopping-cart-symbol.png"></img>
                  <div className="header-counter">0</div>
                </div>
              </Link>
              <Link to="/login"><button className="nav-button" id="nav-btn-login">Logga in</button></Link>
            </Router>
          </div>
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
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">
                  <Register />
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
