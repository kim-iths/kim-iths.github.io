import './filmInfo.css'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import GetData from './GetData';
import { useDispatch, useSelector } from 'react-redux';
import { actions, STATUS } from '../features/cart';
import { useAlert } from 'react-alert';

const Filminfo = () => {

    const status = useSelector(state => state.cart.status);
    const price = useSelector(state => state.cart.price);

    const [buttonPressed, setButtonPressed] = useState(false);

    const dispatch = useDispatch();
    const alert = useAlert()

    useEffect(() => {
        showAlert();
    }, [buttonPressed])

    function showAlert() {

        if (buttonPressed) {
            if (status === STATUS.ADDED) {
                alert.show("Filmen är tillagd!");
            } else if (status === STATUS.EXIST) {
                alert.show("Filmen finns redan i varukorgen!");
            }
        }
        setButtonPressed(false);
    }

    const addItem = (image, title) => {
        dispatch(actions.addToCart({ image, title }));
        // console.log("info", {image, title})
    }

    let params = useParams();

    let movieId = 550

    if ('id' in params) {
        movieId = params.id;
    }

    const [loaded, setLoaded] = useState(false)
    const [id, setId] = useState(movieId)
    const [info, setInfo] = useState({
        title: "",
        year: "",
        playtime: 0,
        overview: "",
        bannerImage: "",
        cast: "",
        genres: "",
        similarMovies: []
    })

    useEffect(async () => {
        setLoaded(false)
        window.scrollTo(0, 0)

        const url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=86f237d170416093156de7affa43927e&language=en-US"

        const creditsUrl = "https://api.themoviedb.org/3/movie/" + id + "/credits?api_key=86f237d170416093156de7affa43927e&language=en-US"

        const similarUrl = "https://api.themoviedb.org/3/movie/" + id + "/similar?api_key=86f237d170416093156de7affa43927e&language=en-US&page=1"

        const data = await GetData(url)
        const creditsData = await GetData(creditsUrl)
        const similarData = await GetData(similarUrl)

        //movie
        let title = data.title
        let year = data.release_date
        let playtime = data.runtime
        let synopsis = data.overview
        let bannerImage = data.backdrop_path
        let posterImage = data.poster_path
        let genres = data.genres

        //credits
        let cast = creditsData.cast

        //similar movies
        let similarMovies = similarData.results
        let amountSimilarMovies = 10

        let elements = []

        if (similarMovies.length) {

            if(amountSimilarMovies > similarMovies.length){
                amountSimilarMovies = similarMovies.length
            }

            for (let i = 0; i < amountSimilarMovies; i++) {

                let currentTitle = similarMovies[i].title

                let currentImage = similarMovies[i].poster_path
                currentImage = "https://image.tmdb.org/t/p/w500" + currentImage

                elements.push(
                    <div className="similar-movie">
                        <Link to={`/filminfo/${similarMovies[i].id}`} onClick={() => setId(similarMovies[i].id)}>
                            <img src={currentImage} alt={currentTitle} className="movie-poster" />
                        </Link>
                        <p>{currentTitle}</p>
                    </div>)
            }
        } else {
            elements.push(
                <p className="no-movies">Det finns inga liknande titlar.</p>)
        }

        //convert variables to their correct values

        //cast -> "name, name, name..."

        let castString = ""
        let amountActors = 4
        if (cast.length < amountActors) {
            amountActors = cast.length
        }

        console.log(cast.length)

        for (let i = 0; i < amountActors; i++) {

            if (i > 0 && i != amountActors) {
                castString += ", "
            }

            castString += cast[i].name

            if (i == amountActors - 1) {
                castString += "..."
            }

        }

        //1999-05-16 -> 1999
        year = year.substring(0, 4)

        //139 -> 2h 19m
        const hours = Math.floor(playtime / 60)
        const minutes = playtime % 60
        playtime = hours + "h " + minutes + "m"

        // /aösldköaldsk.jpg -> https://image.tmdb.org/t/p/w500/aösldköaldsk.jpg
        if (bannerImage != null) {
            bannerImage = "https://image.tmdb.org/t/p/w500" + bannerImage
        } else {
            bannerImage = "https://image.tmdb.org/t/p/w500" + posterImage
        }

        //genres -> action, adventure, whatever
        let genresString = ""

        genres.forEach((e, i) => {
            if (i != 0 && i != genres.length) {
                genresString += ", "
            }
            genresString += e.name
        });

        setInfo({
            title: title,
            year: year,
            playtime: playtime,
            overview: synopsis,
            bannerImage: bannerImage,
            cast: castString,
            genres: genresString,
            similarMovies: elements
        })

        setLoaded(true)

    }, [id])

    return (
        <section>
            <div className={"movie-banner" + (loaded ? " transition" : "")}>
                <div className="background-wrapper">
                    <img className="banner-image-background" src={info.bannerImage} alt={info.title + " background"} />
                </div>
                <img className="banner-image" src={info.bannerImage} alt={info.title} />
                <span className="movie-name">{info.title}</span>
                <span className="movie-year-time">{info.year} / {info.playtime}</span>
            </div>
            <div className="movie-info-content">
                <div className="synopsis-div column">
                    <p className="bold">Handling</p>
                    <p className="movie-synopsis">{info.overview}</p>
                </div>
                <div className="actors-div column">
                    <p className="bold">Skådespelare</p>
                    <p className="movie-actors">{info.cast}</p>
                </div>
                <div className="genres-div column">
                    <p className="bold">Kategorier</p>
                    <p className="movie-genres">{info.genres}</p>
                </div>
            </div>
            <div className="buy">
                <span>{price} kr</span>
                <button className="buy-button" onClick={() => { addItem(info.bannerImage, info.title); setButtonPressed(true) }}>Köp</button>
            </div>
            <div className="similar-movies">
                <p>Liknande filmer</p>
                <div className="movie-row">
                    {info.similarMovies}
                </div>
            </div>
        </section>
    )
}

export default Filminfo;