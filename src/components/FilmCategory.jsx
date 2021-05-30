import './filmCategory.css'
import React, { Component, useState } from 'react'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import GetData from './GetData'

const FilmCategory = () => {

    const [categoryList, setCategoryList] = useState([]);
    
    let pageNumber = 1;

    let loadCategory = async (categoryId) => {
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=86f237d170416093156de7affa43927e&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=${categoryId}`;
        let categoryMovies = await GetData(url);
        if(categoryMovies != null) {
            setCategoryList(
                ...categoryList,
                categoryMovies.results
            );
        }
        console.log('results: ', categoryMovies.results);
        console.log('loadCategory: ', categoryMovies);
    }

    function categoryClick(e) {
        e.preventDefault();
        console.log('The button was clicked.');
    }
    
    let genreList = categoryList.map((category, index) => {
        return (
            categoryList != [] ?
            <div key={index} className="all-categories">
                {category.poster_path ? 
                    <img src={`https://image.tmdb.org/t/p/w500${category.poster_path}`} className="category-poster" alt="" />
                :
                    <p>Poster unavailable</p>
            }
                <p>{category.title}</p>
                <aside className="all-categories-heart">&#x2665;</aside>
            </div>
            :
            <p key={index}>No data</p>
            )
        })

    return (
        <section className="category-content">

            <div className="movie-category">

                <h1 className="categories-h1">Kategorier</h1>

                <div className="category-grid">
                    <button className="category-button" onClick={() => loadCategory(28)}>
                        <h3>Action</h3>
                    </button>
                    <button className="category-button" onClick={() => loadCategory(16)}>
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
                        {genreList}
                </div>
            </div>

        </section>
    )
}

export default FilmCategory;