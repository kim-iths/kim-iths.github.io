import './startScreen.css';
import './kidsmovies.css'
import { useState, useEffect } from 'react';
import GetData from './GetData';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const UpcomingMovies = () => {

    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    

    let previousPage = () => {
        if (currentPage >1) { 
            setCurrentPage(currentPage-1)
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0)
        loadUpcomingMovies(totalPages)
    }, [currentPage, totalPages])

    let loadUpcomingMovies = async () => {
        console.log('Kategori', currentPage);
        let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=86f237d170416093156de7affa43927e`;
        let data = await GetData(url);
        if(upcomingMovies != null) {
            setUpcomingMovies(
                data.results
            );
        }
        console.log('results: ', upcomingMovies.results);
        console.log('loadCategory: ', upcomingMovies);
    }
    let upcomingMoviesList = upcomingMovies.map((category, index) => {
        return (
            upcomingMovies != [] ?
            <div key={index} className="kids-categories">
                {category.poster_path ? 
                    <img src={`https://image.tmdb.org/t/p/w500${category.poster_path}`} className="kids-category-poster" alt="" />
                :
                <img src="img/no-poster.png" alt="" />
            }
                <p>{category.title}</p> 
            </div>
            :
            <p key={index}>No data</p>
            )
        })

    return (
        <section className="kids-category-content">

            <div className="kids-movie-category">

                <h1 className="kids-categories-h1">Kommande filmer</h1>

                <div className="kids-category-grid">
                    <button className="kids-category-button" onClick={() => {setCurrentPage(1); setTotalPages()}}>
                        
                    </button>
   
                   
                </div>
            </div>

            <div className="kids-categories-container">
                <div className="kids-categories-grid">
                    {upcomingMoviesList}
                </div>
            </div>
            <div className="change-page-buttons">
                <div className="change-page-div">
                    <div className="change-page-button" onClick={() => 
                        previousPage()}>
                        <IconButton aria-label="arrowback"><ArrowBackIcon style={{ fill: '#000000' }} /></IconButton>
                    </div>
                </div>
                <div className="change-page-div">
                    <div className="change-page-button" onClick={() => 
                        setCurrentPage(currentPage+1)}>
                        <IconButton aria-label="arrowforward"><ArrowForwardIcon style={{ fill: '#000000' }} /></IconButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UpcomingMovies;