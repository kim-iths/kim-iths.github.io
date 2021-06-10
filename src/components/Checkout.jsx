import './checkout.css'
import React, { Component, useState } from 'react'
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/cart';

const Checkout = () => {

    // Redux
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
    ));

    // Email validation
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState("");
    const [disableButton, setDisableButton] = useState(true);

    const emailRegex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    const validateEmail = (event) => {
        const email = event.target.value;
        if (emailRegex.test(email)) {
            setIsValid(true);
            setMessage('Valid email');
            setDisableButton(false);
        } else {
            setIsValid(false);
            setMessage('Please enter a valid email');
            setDisableButton(true);
        }
        return email
    };

    return (

        <div className="checkout-content">
            <section className="checkout-container">

                <h1 className="checkout-h1">Varukorg</h1>

                {cartElements}

                <div className="email-container">
                    <input type="email"
                        placeholder="Enter your email"
                        className="email-input"
                        onChange={validateEmail}
                    />
                    <div className={"message" + (isValid ? " success" : " error")}>
                        {message}
                    </div>
                </div>

                <div className="checkout-finish-row">
                    <p>Summa: {total} kr</p>
                    <aside><Link to="/receipt"><button className={"checkout-pay" + (disableButton ? " disable" : "")} disabled={disableButton}>Betala</button></Link></aside>
                </div>

            </section>


        </div>
    )
}

export default Checkout;