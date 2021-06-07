import './startScreen.css';
import './kidsmovies.css'
import { useState, useEffect } from 'react';
import GetData from './GetData';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const KidsMovies = () => {

    const [kidscategoryList, setKidsCategoryList] = useState([]);
    const [kidspageNumber, setKidsPageNumber] = useState(1);
    const [kidscategoryId, setKidsCategoryId] = useState(10751);

    let previousPage = () => {
        if (kidspageNumber >1) { 
            setKidsPageNumber(kidspageNumber-1)
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0)
        loadKidsCategory(kidscategoryId)
    }, [kidspageNumber, kidscategoryId])

    let loadKidsCategory = async (genreId) => {
        /*console.log('Kategori', kidspageNumber);*/
        let url = `https://api.themoviedb.org/3/genre/10751/movies?api_key=86f237d170416093156de7affa43927e&sort_by=vote_count.desc&include_adult=false&include_video=false&page=${kidspageNumber}&with_genres=${genreId}`;
        let kidscategoryMovies = await GetData(url);
        if(kidscategoryMovies != null) {
            setKidsCategoryList(
                kidscategoryMovies.results
            );
        }
        console.log('results: ', kidscategoryMovies.results);
        console.log('loadCategory: ', kidscategoryMovies);
    }
    let kidsmoviesCategoryList = kidscategoryList.map((category, index) => {
        return (
            kidscategoryList != [] ?
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
                <h1 className="kids-categories-h1">Barnfilmer</h1>

                <div className="kids-category-grid">
                    <button className="kids-category-button" onClick={() => {setKidsPageNumber(1); setKidsCategoryId(10751)}}></button>
                </div>
            </div>

            <div className="kids-categories-container">
                <div className="kids-categories-grid">
                    {kidsmoviesCategoryList}
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
                    <button className="change-page-button" onClick={() => 
                        setKidsPageNumber(kidspageNumber+1)}>
                        <IconButton aria-label="arrowforward"><ArrowForwardIcon style={{ fill: '#000000' }} /></IconButton>
                    </button>
                </div>
            </div>
        </section>
    )
}
export default KidsMovies;
