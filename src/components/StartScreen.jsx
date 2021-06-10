import './startScreen.css';
import './similarPages.css';
import { Carousel } from '3d-react-carousal';
import { useState, useEffect } from 'react';
import GetData from './GetData';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const StartScreen = () => {

    const [newMovies, setNewMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [slides, setSlides] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(async () => {
        window.scrollTo(0, 0)
        let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=86f237d170416093156de7affa43927e`;
        let data = await GetData(url);
        //console.log('3. Got data in startscreen', data.results);
        setNewMovies(data.results);
    }, [])

    useEffect(async () => {
        window.scrollTo(0, 0)
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=86f237d170416093156de7affa43927e&page=${currentPage}`;
        let data = await GetData(url);
        //console.log('4. Got data in startscreen', data.results);
        setPopularMovies(data.results);
        setTotalPages(data.total_pages);
    }, [currentPage])

    useEffect(() => {
        createSlides();
    }, [newMovies])

    function createSlides() {
        let slide = newMovies.map((newMovie, index) => (
            <div key={index} className="movie-slide-div">
                <Link to={`/filminfo/${newMovie.id}`} style={{ textDecoration: 'none' }}>
                    <img src={`https://image.tmdb.org/t/p/original${newMovie.backdrop_path}`} alt={newMovie.title} />
                    <p className="movie-slide-title">{newMovie.title}</p>
                </Link>
            </div>
        ));
        setSlides(slide);
    }
    //console.log("5. slides with data:", slides)

    if (slides.length > 0) {
        return (
            <div className="startscreen-wrap">
                <section id="movie-slider">
                    <h2 className="pages-h1">Nya filmer</h2>
                    <Carousel slides={slides} autoplay={true} interval={5000} />
                </section>
                <section id="popular-movies">
                    <h3 className="pages-h1">Populära filmer</h3>
                    <div className="popular-movies-container">
                        <div className="grids-popular-movies">
                            {popularMovies.map((popularMovie, index) => (
                                <div key={index} className="popular-movies-div">
                                    <Link to={`/filminfo/${popularMovie.id}`} >
                                        <img src={`https://image.tmdb.org/t/p/w500${popularMovie.poster_path}`} alt={popularMovie.title} />
                                    </Link>
                                    <p>{popularMovie.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="change-page-buttons">
                        <div className="change-page-div">
                            <button className="change-page-button" onClick={() =>
                                previousPage()}>
                                <IconButton aria-label="arrowback"><ArrowBackIcon style={{ fill: '#000000' }} /></IconButton>
                            </button>
                        </div>
                        <div className="change-page-div">
                            <div className="categories-change-button" onClick={() =>
                                nextPage(currentPage + 1)}>
                                <IconButton aria-label="arrowforward"><ArrowForwardIcon style={{ fill: '#000000' }} /></IconButton>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    } else return (<h3 className="loading-text">Loading...</h3>)

    function nextPage() {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    function previousPage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }
}

export default StartScreen;