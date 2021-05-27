import './startScreen.css';
import { Carousel } from '3d-react-carousal';
import { useState, useEffect } from 'react';
import GetData from './GetData'


const StartScreen = () => {

    const [newMovies, setNewMovies] = useState([]);

    useEffect(async () => {
        let url = "https://api.themoviedb.org/3/movie/550?api_key=86f237d170416093156de7affa43927e";
        let dataMovies = await GetData(url);
        console.log('3. Got data in startscreen', dataMovies);
        setNewMovies(dataMovies);
    },[])
    

    let imageUrl = `https://image.tmdb.org/t/p/w500${newMovies.backdrop_path}`;

    let slides = [
        <div className="movie-slide-div">
            <img src={imageUrl} alt="title" />
            <p className="movie-slide-title">{newMovies.original_title}</p>
            <aside className="movie-slide-heart">&#x2665;</aside>
        </div>,
        <div className="movie-slide-div">
            <img src="img/the_lego_movie.png" alt="title" />,
            <p className="movie-slide-title">The lego movie</p>
            <aside className="movie-slide-heart">&#x2665;</aside>
        </div>,
        <div className="movie-slide-div">
            <img src="img/black_panther.png" alt="title" />
            <p className="movie-slide-title">Black Panther</p>
            <aside className="movie-slide-heart">&#x2665;</aside>
        </div>,
        <div className="movie-slide-div">
            <img src="img/the_lego_movie.png" alt="title" />,
            <p className="movie-slide-title">The lego movie</p>
            <aside className="movie-slide-heart">&#x2665;</aside>
        </div>,
        <div className="movie-slide-div">
            <img src="img/black_panther.png" alt="title" />
            <p className="movie-slide-title">Black Panther</p>
            <aside className="movie-slide-heart">&#x2665;</aside>
        </div>,
        <div className="movie-slide-div">
            <img src="img/the_lego_movie.png" alt="title" />,
            <p className="movie-slide-title">The lego movie</p>
            <aside className="movie-slide-heart">&#x2665;</aside>
        </div>,
    ];

    let allMovies = [


    ];


    return (
        <div className="startscreen-wrap">

            <section id="movie-slider">
                <h2 className="title-new-movies">Nya filmer</h2>
                <Carousel slides={slides} autoplay={false} interval={5000} />
            </section>
            <section id="popular-movies">
                <h3 className="title-popular-movies">Alla filmer</h3>
                <div className="grids-popular-movies">
                    <div className="popular-movies-div">
                        <img src="img/black_panther.png" alt="title" />
                        <p>Black Panther</p>
                        <aside className="movie-heart">&#x2665;</aside>
                    </div>
                    <div className="popular-movies-div">
                        <img src="img/the_lego_movie.png" alt="title" />
                        <p>The Lego Movie</p>
                        <aside className="movie-heart">&#x2665;</aside>
                    </div>
                    <div className="popular-movies-div">
                        <img src="img/black_panther.png" alt="title" />
                        <p>Black Panther</p>
                        <aside className="movie-heart">&#x2665;</aside>
                    </div>
                    <div className="popular-movies-div">
                        <img src="img/the_lego_movie.png" alt="title" />
                        <p>The Lego Movie</p>
                        <aside className="movie-heart">&#x2665;</aside>
                    </div>
                    <div className="popular-movies-div">
                        <img src="img/black_panther.png" alt="title" />
                        <p>Black Panther</p>
                        <aside className="movie-heart">&#x2665;</aside>
                    </div>
                    <div className="popular-movies-div">
                        <img src="img/the_lego_movie.png" alt="title" />
                        <p>The Lego Movie</p>
                        <aside className="movie-heart">&#x2665;</aside>
                    </div>
                    <div className="popular-movies-div">
                        <img src="img/black_panther.png" alt="title" />
                        <p>Black Panther</p>
                        <aside className="movie-heart">&#x2665;</aside>
                    </div>
                    <div className="popular-movies-div">
                        <img src="img/the_lego_movie.png" alt="title" />
                        <p>The Lego Movie</p>
                        <aside className="movie-heart">&#x2665;</aside>
                    </div>
                    <div className="popular-movies-div">
                        <img src="img/black_panther.png" alt="title" />
                        <p>Black Panther</p>
                        <aside className="movie-heart">&#x2665;</aside>
                    </div>
                    <div className="popular-movies-div">
                        <img src="img/the_lego_movie.png" alt="title" />
                        <p>The Lego Movie</p>
                        <aside className="movie-heart">&#x2665;</aside>
                    </div>
                    <div className="popular-movies-div">
                        <img src="img/black_panther.png" alt="title" />
                        <p>Black Panther</p>
                        <aside className="movie-heart">&#x2665;</aside>
                    </div>
                    <div className="popular-movies-div">
                        <img src="img/the_lego_movie.png" alt="title" />
                        <p>The Lego Movie</p>
                        <aside className="movie-heart">&#x2665;</aside>
                    </div>
                </div>
            </section>
        </div>
    )
}

// async function getData(url) {
 
//     try {
//     let resp = await fetch(url);
//     console.log('1. Got response', resp);
//     let data = await resp.json();
//     console.log('2. Got data', data);
    
//     return data;
//     }
//     catch(error) {
//     console.log(error);
//     }
// }

export default StartScreen;