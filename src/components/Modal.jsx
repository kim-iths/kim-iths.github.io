import React from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'
import './modal.css'
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/cart';


function Modal({ open, onClose }) {

    const movies = useSelector(state => state.cart.movies);
    const price = useSelector(state => state.cart.price);
    const total = useSelector(state => state.cart.total);

    const dispatch = useDispatch();

    const removeItem = (title) => {
        dispatch(actions.removeFromCart(title));
    } 

    const modalElements = movies.map((movie, index) => (
        <div className="modal-row">
            <div className="modal-title">
                <p>{movie.title}</p>
            </div>
            <div className="modal-price"><p>149 kr</p></div>
            <aside className="delete-button" onClick={() => removeItem(movie.title)}><IconButton aria-label="delete"><DeleteForeverIcon style={{ fill: '#000000' }} /></IconButton></aside>
        </div>
    ));

    if (!open) return null
    return ReactDom.createPortal(
        <>
            <div className="overlay-styles" onClick={() => console.log('clicked')} />
            <div className="modal-styles">
                <Link to="./shoppingcart"><button classname="modal-cart" id="modal-cart-btn" onClick={onClose}>Till kassan</button></Link>
                <button classname="close-cart" id="close-cart-btn" onClick={onClose}>&#10006;</button>

                <div className="modal-content">
                    <section className="modal-container">
                        <div className="modal-column">
                            <div className="modal-h1-div"><h1 className="modal-h1">Varukorg</h1></div>
                            {modalElements}
                        </div>

                        <div className="modal-finish-row">
                            <p>Summa: {total} kr</p>
                        </div>
                    </section>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal;