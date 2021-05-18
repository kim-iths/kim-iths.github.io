import logo from './logo.svg';
import './App.css';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";


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
        <p>
          Hallå där!
        </p>
      </header>
      <main>
        <p>
          Funkar jag?
        </p>
        <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQQt0kUCWldIeDC3LgW98DLQ0qBWgfprfeiFdQzDMtdtwSzwxeNOivQWFqoUvLYlNYnF716-PiaHTTKdTVv0hxvytbmvR6VCvrY_YSPvrkwDCVbwlAMejXx5g&usqp=CAE" alt="dog" />
        <p>a</p>

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
