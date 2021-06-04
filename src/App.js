import logo from './logo.svg';
import './App.css';
import { Route, HashRouter as Router, Link, Switch } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";
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
import Modal from './components/Modal'
import zIndex from '@material-ui/core/styles/zIndex';
import React,{useState} from 'react'



import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MenuIcon from '@material-ui/icons/Menu';



function App() {

  var firebaseConfig = {
    apiKey: "AIzaSyCzeIBnMI6pKUlgD6WuQ7Aq2gfOBJH5diE",
    authDomain: "movieblock-ef82a.firebaseapp.com",
    projectId: "movieblock-ef82a",
    storageBucket: "movieblock-ef82a.appspot.com",
    messagingSenderId: "149733430256",
    appId: "1:149733430256:web:00863b11f06fddbf754335",
    measurementId: "G-TLZGPF5L59"
  };
  const[isOpen, setIsOpen] = useState(false)
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
              <Link to="/shoppingcart"><IconButton aria-label="shop"><ShoppingBasketIcon style={{ fill: '#000000' }} /></IconButton></Link>
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
                  <Checkout/>
                </Route>
                <Route path="/login">
                  <Login/>
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
              </Switch>
            </Router>
          </div>



          <script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js"></script>

          <script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-analytics.js"></script>

          <script>
            firebase.initializeApp(firebaseConfig);
            firebase.analytics();
          </script>
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
