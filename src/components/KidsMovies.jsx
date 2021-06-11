import './startScreen.css';
import './similarPages.css';
import { useState, useEffect } from 'react';
import GetData from './GetData';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const KidsMovies = () => {

    const [kidscategoryList, setKidsCategoryList] = useState([]);
    const [kidspageNumber, setKidsPageNumber] = useState(1);
    const [kidscategoryId, setKidsCategoryId] = useState(10751);

    let previousPage = () => {
        if (kidspageNumber > 1) {
            setKidsPageNumber(kidspageNumber - 1)
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
        if (kidscategoryMovies != null) {
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
                <div key={index} className="pages-categories">
                    <Link to={`/filminfo/${category.id}`}>
                        {category.poster_path ?
                            <img src={`https://image.tmdb.org/t/p/w500${category.poster_path}`} className="pages-poster" alt="" />
                            :
                            <img src="img/no-poster.png" alt="" />
                        }
                    </Link>
                    <p>{category.title}</p>
                </div>
                :
                <p key={index}>No data</p>
        )
    })

    return (
        <section className="pages-content">
            <div className="pages-category">
                <h1 className="pages-h1">Barnfilmer</h1>
            </div>
            <div className="pages-grid-container">
                <div className="pages-grid">
                    {kidsmoviesCategoryList}
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
                        setKidsPageNumber(kidspageNumber + 1)}>
                        <IconButton aria-label="arrowforward"><ArrowForwardIcon style={{ fill: '#000000' }} /></IconButton>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default KidsMovies;
