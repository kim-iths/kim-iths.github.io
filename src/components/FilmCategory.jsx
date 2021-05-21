import './filmCategory.css' 
import React, { Component } from 'react'
import { Link } from "react-router-dom";

const FilmCategory = () => {

    function categoryClick(e) {
    e.preventDefault();
    console.log('The button was clicked.');
    }

        return (

        <section className="category-content">

            <div className="movie-category">

                <h1 className="categories-h1">Kategorier</h1>
                
                <div className="category-container">
                    <div className="category-grid">
                        <button className="category-button col" onClick={categoryClick}>
                            <h3>Action</h3>
                        </button>
                        <button className ="category-button col" onClick={categoryClick}>
                            <h3>Animerat</h3>
                        </button>
                        <button className ="category-button col" onClick={categoryClick}>
                            <h3>Barnfilm</h3>
                        </button>
                        <button className ="category-button col" onClick={categoryClick}>
                            <h3>Komedi</h3>
                        </button>
                        <button className ="category-button col" onClick={categoryClick}>
                            <h3>Drama</h3>
                        </button>
                        <button className ="category-button col" onClick={categoryClick}>
                            <h3>Romantik</h3>
                        </button>
                        <button className ="category-button col" onClick={categoryClick}>
                            <h3>Skräck</h3>
                        </button>
                        <button className ="category-button col" onClick={categoryClick}>
                            <h3>Fantasy</h3>
                        </button>
                        <button className ="category-button col" onClick={categoryClick}>
                            <h3>Science Fiction</h3>
                        </button>
                        <button className ="category-button col" onClick={categoryClick}>
                            <h3>Äventyr</h3>
                        </button>
                        <button className ="category-button col" onClick={categoryClick}>
                            <h3>Thriller</h3>
                        </button>
                        <button className ="category-button col" onClick={categoryClick}>
                            <h3>Dokumentär</h3>
                        </button>
                    </div>
                </div>
            </div>

            <h3 className="all-movies-h3">Alla filmer</h3>

            <div className="all-categories-container">
                <div className="all-categories-grid">
                    <div className="col all-categories"><p>Titel</p>
                    </div>
                    <div className="col all-categories"><p>Titel</p>
                    </div>
                    <div className="col all-categories"><p>Titel</p>
                    </div>
                    <div className="col all-categories"><p>Titel</p>
                    </div>
                    <div className="col all-categories"><p>Titel</p>
                    </div>
                    <div className="col all-categories"><p>Titel</p>
                    </div>
                    <div className="col all-categories"><p>Titel</p>
                    </div>
                    <div className="col all-categories"><p>Titel</p>
                    </div>
                    <div className="col all-categories"><p>Titel</p>
                    </div>
                    <div className="col all-categories"><p>Titel</p>
                    </div>
                </div>
            </div>
        </section>
        )
}

export default FilmCategory;