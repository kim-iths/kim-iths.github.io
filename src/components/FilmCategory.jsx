import './filmCategory.css'
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import GetData from './GetData'

const FilmCategory = () => {

    useEffect(async () => {
        let url = "https://api.themoviedb.org/3/movie/popular?api_key=86f237d170416093156de7affa43927e";
        let popularMovies = await GetData(url);
        console.log('3. Got data in filmcat', popularMovies);
    }, [])

    function categoryClick(e) {
        e.preventDefault();
        console.log('The button was clicked.');
    }

    return (
        <section className="category-content">

            <div className="movie-category">

                <h1 className="categories-h1">Kategorier</h1>

                <div className="category-grid">
                    <button className="category-button" onClick={categoryClick}>
                        <h3>Action</h3>
                    </button>
                    <button className="category-button" onClick={categoryClick}>
                        <h3>Animerat</h3>
                    </button>
                    <button className="category-button" onClick={categoryClick}>
                        <h3>Barnfilm</h3>
                    </button>
                    <button className="category-button" onClick={categoryClick}>
                        <h3>Komedi</h3>
                    </button>
                    <button className="category-button" onClick={categoryClick}>
                        <h3>Drama</h3>
                    </button>
                    <button className="category-button" onClick={categoryClick}>
                        <h3>Romantik</h3>
                    </button>
                    <button className="category-button" onClick={categoryClick}>
                        <h3>Skräck</h3>
                    </button>
                    <button className="category-button" onClick={categoryClick}>
                        <h3>Fantasy</h3>
                    </button>
                    <button className="category-button" onClick={categoryClick}>
                        <h3>Science Fiction</h3>
                    </button>
                    <button className="category-button" onClick={categoryClick}>
                        <h3>Äventyr</h3>
                    </button>
                    <button className="category-button" onClick={categoryClick}>
                        <h3>Thriller</h3>
                    </button>
                    <button className="category-button" onClick={categoryClick}>
                        <h3>Dokumentär</h3>
                    </button>
                </div>
            </div>

            <h3 className="all-movies-h3">Alla filmer</h3>

            <div className="all-categories-container">
                <div className="all-categories-grid">
                    <Link to="/filminfo">
                        <div className="all-categories">
                            <p>Titel</p>
                            <aside className="all-categories-heart">&#x2665;</aside>
                        </div>
                    </Link>
                    <div className="all-categories">
                        <p>Titel</p>
                        <aside className="all-categories-heart">&#x2665;</aside>
                    </div>
                    <div className="all-categories">
                        <p>Titel</p>
                        <aside className="all-categories-heart">&#x2665;</aside>
                    </div>
                    <div className="all-categories">
                        <p>Titel</p>
                        <aside className="all-categories-heart">&#x2665;</aside>
                    </div>
                    <div className="all-categories">
                        <p>Titel</p>
                        <aside className="all-categories-heart">&#x2665;</aside>
                    </div>
                    <div className="all-categories">
                        <p>Titel</p>
                        <aside className="all-categories-heart">&#x2665;</aside>
                    </div>
                    <div className="all-categories">
                        <p>Titel</p>
                        <aside className="all-categories-heart">&#x2665;</aside>
                    </div>
                    <div className="all-categories">
                        <p>Titel</p>
                        <aside className="all-categories-heart">&#x2665;</aside>
                    </div>
                    <div className="all-categories">
                        <p>Titel</p>
                        <aside className="all-categories-heart">&#x2665;</aside>
                    </div>
                    <div className="all-categories">
                        <p>Titel</p>
                        <aside className="all-categories-heart">&#x2665;</aside>
                    </div>
                    <div className="all-categories">
                        <p>Titel</p>
                        <aside className="all-categories-heart">&#x2665;</aside>
                    </div>
                    <div className="all-categories">
                        <p>Titel</p>
                        <aside className="all-categories-heart">&#x2665;</aside>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default FilmCategory;