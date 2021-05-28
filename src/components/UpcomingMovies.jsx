import './startScreen.css';
import { useState, useEffect } from 'react';
import GetData from './GetData';
import { Link } from "react-router-dom";


const UpcomingMovies = () => {

    const [search, setSearch] = useState([]);

    useEffect(async () => {
        let url = "https://api.themoviedb.org/3/movie/550?api_key=86f237d170416093156de7affa43927e";
        let dataMovies = await GetData(url);
        console.log('3. Got data in startscreen', dataMovies);
        setSearch(dataMovies);
    }, [])

    return (
        <div className="startscreen-wrap">
            <section id="popular-movies">
                <h2 className="title-popular-movies">Kommande filmer</h2>
                <div className="grids-popular-movies">
                    <Link to="/filminfo">
                        <div className="popular-movies-div">
                            <img src="img/black_panther.png" alt="title" />
                            <p>Black Panther</p>
                            <aside className="movie-heart">&#x2665;</aside>
                        </div>
                    </Link>
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

export default UpcomingMovies;