import './checkout.css'
import React, { Component } from 'react'
import { Link } from "react-router-dom";
//import IconButton from '@material-ui/core/IconButton';
//import DeleteIcon from '@material-ui/icons/Delete';
// <aside><IconButton aria-label="delete"><DeleteIcon /></IconButton></aside>

const Checkout = () => {

    return (

        <section className="checkout-content">
            <div className="checkout-container">
            <h1 className="checkout-h1">Varukorg</h1>

            <div className="checkout-row">
                <img src="img/black_panther.png" alt="title" />
                <p>Black Panther</p>
                <div className="checkout-price">199 kr</div>
                <aside><button className="delete-button">Delete</button></aside>
            </div>

            <div className="checkout-row">
                <img src="img/the_lego_movie.png" alt="title" />
                <p>The Lego Movie</p>
                <div className="checkout-price">149 kr</div>
                <aside><button>Delete</button></aside>
            </div>

            <div className="checkout-finish-row">
                <p>Summa: 348 kr</p>
                <aside><button className="checkout-pay">Betala</button></aside>
            </div>

                

            </div>
        </section>
    )

}

export default Checkout;