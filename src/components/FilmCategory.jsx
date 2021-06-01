import './filmCategory.css'
import React, { Component, useState } from 'react'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import GetData from './GetData'
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

const FilmCategory = () => {

    const [categoryList, setCategoryList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [categoryId, setCategoryId] = useState(35);
    useEffect(() => {
        loadCategory(categoryId)
    }, [pageNumber, categoryId])

    let loadCategory = async (genreId) => {
        {/*if (categoryId != categoryList.with_genres) {
            setPageNumber(1)
        }*/}
        console.log('Kategori', pageNumber);
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=86f237d170416093156de7affa43927e&sort_by=vote_count.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=${genreId}`;
        let categoryMovies = await GetData(url);
        if(categoryMovies != null) {
            setCategoryList(
                categoryMovies.results
            );
        }
        console.log('results: ', categoryMovies.results);
        console.log('loadCategory: ', categoryMovies);
    }
    let moviesCategoryList = categoryList.map((category, index) => {
        return (
            categoryList != [] ?
            <div key={index} className="all-categories">
                {category.poster_path ? 
                    <img src={`https://image.tmdb.org/t/p/w500${category.poster_path}`} className="category-poster" alt="" />
                :
                <img src="img/no-poster.png" alt="" />
            }
                <p>{category.title}</p>
                <aside className="all-categories-heart"><IconButton aria-label="favorite"><FavoriteIcon style={{ backgroundColor:'#25252594', borderRadius: '20%', fill: '#ffffff' }} /></IconButton></aside> 
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
                    <button className="category-button" onClick={() => setCategoryId(28)}>
                        <h3>Action</h3>
                    </button>
                    <button className="category-button" onClick={() => setCategoryId(16)}>
                        <h3>Animerat</h3>
                    </button>
                    <button className="category-button" onClick={() => setCategoryId(10751)}>
                        <h3>Barnfilm</h3>
                    </button>
                    <button className="category-button" onClick={() => setCategoryId(35)}>
                        <h3>Komedi</h3>
                    </button>
                    <button className="category-button" onClick={() => setCategoryId(18)}>
                        <h3>Drama</h3>
                    </button>
                    <button className="category-button" onClick={() => setCategoryId(10749)}>
                        <h3>Romantik</h3>
                    </button>
                    <button className="category-button" onClick={() => setCategoryId(27)}>
                        <h3>Skräck</h3>
                    </button>
                    <button className="category-button" onClick={() => setCategoryId(14)}>
                        <h3>Fantasy</h3>
                    </button>
                    <button className="category-button" onClick={() => setCategoryId(878)}>
                        <h3>Science Fiction</h3>
                    </button>
                    <button className="category-button" onClick={() => setCategoryId(12)}>
                        <h3>Äventyr</h3>
                    </button>
                    <button className="category-button" onClick={() => setCategoryId(53)}>
                        <h3>Thriller</h3>
                    </button>
                    <button className="category-button" onClick={() => setCategoryId(99)}>
                        <h3>Dokumentär</h3>
                    </button>
                </div>
            </div>

            {/*<h3 className="all-movies-h3">Alla filmer</h3>*/}

            <div className="all-categories-container">
                <div className="all-categories-grid">
                    {moviesCategoryList}
                </div>
            </div>
                <button className="next-page-button" onClick={() => 
                    setPageNumber(pageNumber+1)}>
                    NÄSTA SIDA
                </button>
        </section>
    )
}

export default FilmCategory;