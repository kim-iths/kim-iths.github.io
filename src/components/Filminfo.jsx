import './filmInfo.css'
import React, { Component, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import GetData from './GetData';

const Filminfo = () => {

    const [title, setTitle] = useState("")
    const [info, setInfo] = useState({title: "name", year: "", playtime: 0, overview: "", bannerImage: "", cast: "", genres: ""})
    
    useEffect(async () => {
        const placeholderIdString = "552"
        const url = "https://api.themoviedb.org/3/movie/" + placeholderIdString + "?api_key=86f237d170416093156de7affa43927e&language=en-US"
    
        const creditsUrl = "https://api.themoviedb.org/3/movie/" + placeholderIdString + "/credits?api_key=86f237d170416093156de7affa43927e&language=en-US"

        const data = await GetData(url)
        const creditsData = await GetData(creditsUrl)
        
        let title = data.title
        let year = data.release_date
        let playtime = data.runtime
        let synopsis = data.overview
        let bannerImage = data.backdrop_path
        let genres = data.genres

        //credits
        let cast = creditsData.cast

        //convert variables to their correct values

        //cast -> "name, name, name..."
        
        let amountActors = 4
        let castString = ""

        for(let i = 0; i < amountActors; i++){
            if(i > 0 && i != amountActors){
                castString += ", "
            }

            castString += cast[i].name

            if(i == amountActors-1){
                castString += "..."
            }

        }
        
        //1999-05-16 -> 1999
        year = year.substring(0,4)

        //139 -> 2h 19m
        const hours = Math.floor(playtime / 60)
        const minutes = playtime % 60
        playtime = hours + "h " + minutes + "m"

        // /aösldköaldsk.jpg -> https://image.tmdb.org/t/p/w500/aösldköaldsk.jpg
        bannerImage = "https://image.tmdb.org/t/p/w500" + bannerImage

        //genres -> action, adventure, whatever
        let genresString = ""

        genres.forEach((e, i) => {
            if(i != 0 && i != genres.length){
                genresString += ", "
            }
            genresString += e.name
        });

        setInfo({title: title, 
            year: year, 
            playtime: playtime, 
            overview: synopsis, 
            bannerImage: bannerImage, 
            cast: castString, 
            genres: genresString})
    }, [])




    return(
        <section>
            <div className="movie-banner">
                <img className="banner-image" src={info.bannerImage} alt="movie" />
                <span className="movie-name">{info.title}</span>
                <span className="movie-year-time">{info.year} / {info.playtime}</span>
            </div>
            <div className="movie-info-content">
                <div className="synopsis-div column">
                    <p className="bold">Handling</p>
                    <p className="movie-synopsis">{info.overview}</p>
                </div>
                <div className="actors-div column">
                    <p className="bold">Cast</p>
                    <p className="movie-actors">{info.cast}</p>
                </div>
                <div className="genres-div column">
                    <p className="bold">Genres</p>
                    <p className="movie-genres">{info.genres}</p>
                </div>
            </div>
            <div className="buy">
                <span>199 kr</span>
                <button className="buy-button">Köp</button>
            </div>
            <div className="related-movies">
                <p>Liknande filmer</p>
                <div className="movie-row">
                    <div className="related-movie"></div>
                    <div className="related-movie"></div>
                    <div className="related-movie"></div>
                    <div className="related-movie"></div>
                    <div className="related-movie"></div>
                </div>
            </div>
        </section>
    )
}

export default Filminfo;