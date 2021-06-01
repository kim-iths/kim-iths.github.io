import './startScreen.css';
import { Carousel } from '3d-react-carousal';
import { useState, useEffect } from 'react';
import GetData from './GetData';
import { Link } from "react-router-dom";


const StartScreen = () => {

    const [newMovies, setNewMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [slides, setSlides] = useState([]);
    const [slidesAreCreated, setSlidesAreCreated] = useState(false);

    useEffect(async () => {
        let url = "https://api.themoviedb.org/3/movie/now_playing?api_key=86f237d170416093156de7affa43927e";
        let data = await GetData(url);
        console.log('3. Got data in startscreen', data.results);
        setNewMovies(data.results);
        createSlides();
    }, [])

    useEffect(async () => {
        let url = "https://api.themoviedb.org/3/movie/popular?api_key=86f237d170416093156de7affa43927e";
        let data = await GetData(url);
        console.log('3. Got data in startscreen', data.results);
        setPopularMovies(data.results);
    }, [])

    function createSlides() {
        let slide = newMovies.map((newMovie, index) => (
            <div key={index} className="movie-slide-div">
                <Link to="/filminfo" style={{ textDecoration: 'none' }}>
                    <img src={`https://image.tmdb.org/t/p/original${newMovie.backdrop_path}`} alt={newMovie.original_title} />,
            <p className="movie-slide-title">{newMovie.original_title}</p>,
            <aside className="movie-slide-heart">&#x2665;</aside>,
            </Link>
            </div>
        ));
        setSlides(slide);
        setSlidesAreCreated(true)
    }

    if (slidesAreCreated) {
        return (
            <div className="startscreen-wrap">
                <section id="movie-slider">
                    <h2 className="title-new-movies">Nya filmer</h2>
                   <Carousel slides={slides} autoplay={true} interval={5000} />
                </section>
                <section id="popular-movies">
                    <h3 className="title-popular-movies">Populära filmer</h3>
                    <div className="popular-movies-container">
                        <div className="grids-popular-movies">
                            {popularMovies.map((popularMovie, index) => (
                                <Link to="/filminfo" style={{ textDecoration: 'none' }}>
                                    <div key={index} className="popular-movies-div">
                                        <img src={`https://image.tmdb.org/t/p/w500${popularMovie.poster_path}`} alt={popularMovie.original_title} />
                                        <p>{popularMovie.original_title}</p>
                                        <aside className="movie-heart">&#x2665;</aside>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        )
    } else return ("Loading...")
}

export default StartScreen;