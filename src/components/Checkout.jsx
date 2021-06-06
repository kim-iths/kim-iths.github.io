import './checkout.css'
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/cart';

const Checkout = () => {

    const movies = useSelector(state => state.cart.movies);
    const price = useSelector(state => state.cart.price);
    const total = useSelector(state => state.cart.total);

    const dispatch = useDispatch();

    const removeItem = (title) => {
        dispatch(actions.removeFromCart(title));
    } 
    
    const cartElements = movies.map((movie, index) => (
        <div className="checkout-row" key={index}>
                <img src={movie.image} alt={movie.title} />
                <p>{movie.title}</p>
                <div className="checkout-price">{price} kr</div>
                <aside onClick={() => removeItem(movie.title)}><IconButton aria-label="delete"><DeleteForeverIcon style={{ fill: '#000000' }} /></IconButton></aside>
            </div>
    ))

    return (

        <section className="checkout-content">
            <div className="checkout-container">
            <h1 className="checkout-h1">Varukorg</h1>

            {cartElements}

            <div className="checkout-finish-row">
                <p>Summa: {total} kr</p>
                <aside><button className="checkout-pay">Betala</button></aside>
            </div>

                

            </div>
        </section>
    )

}

export default Checkout;