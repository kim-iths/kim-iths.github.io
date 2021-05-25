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

  return (

    <div className="App">
      <header className="App-header">

        <div className="nav-bar" id="nav-container">

          <Router basename={process.env.PUBLIC_URL}>
            <Link to="/startScreen"><button className="nav-button" id="nav-btn-home">Movieblock</button></Link>
            <Link to="/filmCategory"><button className="nav-button" id="nav-btn-categories">Kategorier</button></Link>
            <Link to="/filmCategory"><button className="nav-button" id="nav-btn-movies">Barnfilmer</button></Link>
            <Link to="/filmCategory"><button className="nav-button" id="nav-btn-movies">Kommande</button></Link>
            <Link to="/favorites"><button className="nav-button" id="nav-btn-favorites">Favoriter</button></Link>
            <input type="text" className="search-field" placeholder="Sök"></input>
            <Link to="/filminfo"><img className="nav-img" id="magnify-glass" src="assets/magnify_glass.png"></img></Link>
            <Link to="/shoppingcart"><img className="nav-img" id="nav-symbol-shopcart" src="assets/shopping-cart-symbol.png"></img></Link>
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
              <Route path="/filmcategory">
                {/* Barnfilmer */}
              </Route>
              <Route path="/filmcategory">
                {/* Kommande */}
              </Route>
              <Route path="/favorites">
                <Favorites />
              </Route>
              <Route path="/filmcategory">
                {/* Sökta filmer */}
              </Route>
              <Route path="/shoppingcart">
                <Shoppingcart/>
              </Route>
              <Route path="/login">
                <Login/>
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

      <footer>
        <div className="footer" id="footer-text">
          <p> © Movieblock AB 2021 support@movieblock.se</p>
        </div>
      </footer>
    </div>

  );
}

export default App;
