import logo from './logo.svg';
import './App.css';
import { Route, HashRouter as Router, Link, Switch } from "react-router-dom"
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

       

        <div className="nav-bar"id="nav-container">
           
            <Router basename={process.env.PUBLIC_URL}>
            <Route path="/" exact><StartScreen/></Route>
            <Link to="/StartScreen"><button className="nav-button"id="nav-btn-home">Movieblock</button></Link>
            <Link to="/Filminfo"><button className="nav-button"id="nav-btn-movies">Filmer</button></Link>
            
            <Link to="/FilmCategory"><button className="nav-button"id="nav-btn-categories">Kategorier</button></Link>
            <Link to="/Favorites"><button className="nav-button"id="nav-btn-favorites">Favoriter</button></Link>
            <input type="text" className="search-field" placeholder="Sök"></input>
            <img className="search-field"id="magnify-glass" src="assets/magnify_glass.png"></img>
            <Link to="/Shoppingcart"><img className="nav-img"id="nav-symbol-shopcart" src="assets/shopping-cart-symbol.png"></img></Link>
            <Link to="/Login"><button className="nav-button"id="nav-btn-login">Logga in</button></Link>
            </Router>



            </div>

      </header>
      <main>
        <footer id="footer">
          <div className="empty-container"></div>
          <div className="container">
            

          </div>

        </footer>
        <img src="https://lajoyalink.com/wp-content/uploads/2018/03/Movie.jpg" alt="dog" />
       
       

      <script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js"></script>

      <script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-analytics.js"></script>

      <script>
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
      </script>
      </main>
    </div>
    
  );
}

export default App;
