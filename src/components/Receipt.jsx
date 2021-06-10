import './receipt.css'
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


const Receipt = () => {

     // Redux
     const movies = useSelector(state => state.cart.movies);
     const price = useSelector(state => state.cart.price);
     const total = useSelector(state => state.cart.total);
 
     const cartElements = movies.map((movie, index) => (
         <div className="receipt-row" key={index}>
             <img src={movie.image} alt={movie.title} />
             <p>{movie.title}</p>
             <div className="receipt-price">{price} kr</div>
         </div>
     ));
 
     return (
 
         <div className="receipt-content">
             <section className="receipt-container">
 
                 <h1 className="receipt-h1">Kvitto</h1>
                <p>Tack för ditt köp!</p>
                 {cartElements}
 
                 <div className="receipt-finish-row">
                     <p>Summa: {total} kr</p>
                </div>
                <p>Kvittot har skickats till din email: </p>
 
             </section>

         </div>
     )
}

export default Receipt;