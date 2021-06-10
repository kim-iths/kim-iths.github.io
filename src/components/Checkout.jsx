import './checkout.css'
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';



const Checkout = () => {
    

    return (

        <div className="checkout-content">
            <section className="checkout-container">
            <h1 className="checkout-h1">Varukorg</h1>

            <div className="checkout-row">
                <img src="img/black_panther.png" alt="title" />
                <p>Black Panther</p>
                <div className="checkout-price">199 kr</div>
                <aside><IconButton aria-label="delete"><DeleteForeverIcon style={{ fill: '#000000' }} /></IconButton></aside>
            </div>

            <div className="checkout-row">
                <img src="img/the_lego_movie.png" alt="title" />
                <p>The Lego Movie</p>
                <div className="checkout-price">149 kr</div>
                <aside><IconButton aria-label="delete"><DeleteForeverIcon style={{ fill: '#000000' }} /></IconButton></aside>
            </div>

            
            

      


            
            <div className="checkout-finish-row">
                <p>Summa: 348 kr</p>
                <aside><button className="checkout-pay">Betala</button></aside>
            </div>

            </section>
        </div>
    )

}

export default Checkout;