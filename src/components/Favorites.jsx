import { colors } from '@material-ui/core';
import React, { Component } from 'react'
import { Link } from "react-router-dom";

const Favorites = () => {
  
    return (
        <div className="startscreen-wrap">
            <section id="popular-movies">
                <h2 className="title-popular-movies">Favoriter</h2>
                <div className="grids-popular-movies">
                    <Link to="/filminfo">
                        <div className="popular-movies-div">
                            <img src="img/black_panther.png" alt="title" />
                            <p>Black Panther</p>
                            <aside className="movie-heart" style={{color: 'red'}}>&#x2665;</aside>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Favorites;