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
            <h1 classname="Title">Movieblock</h1>
            <Router basename={process.env.PUBLIC_URL}>
            <Route path="/" exact><StartScreen/></Route>
            <Link to="/StartScreen"><button className="nav-button">Hem</button></Link>
            <Link to="/Filminfo"><button className="nav-button">Filminfo</button></Link>
            <Link to="/Favorites"><button className="nav-button">Favoriter</button></Link>
            <Link to="/Login"><button className="nav-button">Logga in</button></Link>
            <Link to="/FilmCategory"><button className="nav-button">Kategorier</button></Link>
            <Link to="/Checkout"><button className="nav-button">Köp</button></Link>
            <Link to="/Register"><button className="nav-button">Registrera</button></Link>
            <Link to="/Shoppingcart"><button className="nav-button">Varukorg</button></Link>
            </Router>



            </div>

      </header>
      <main>
        <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQQt0kUCWldIeDC3LgW98DLQ0qBWgfprfeiFdQzDMtdtwSzwxeNOivQWFqoUvLYlNYnF716-PiaHTTKdTVv0hxvytbmvR6VCvrY_YSPvrkwDCVbwlAMejXx5g&usqp=CAE" alt="dog" />
       
       

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
