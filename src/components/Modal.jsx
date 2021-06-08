import React from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'
import './modal.css'
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';




const MODAL_STYLES = {

    position: 'fixed',
    top: '45%',
    left: '72.2%',
    height: '400px',
    width: '150px',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#B5BFE2',
    padding: '50px',
    zIndex: 1000


}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, .7)',
    zIndex: 1000





}


export default function Modal({ open, onClose }) {
    if (!open) return null
    return ReactDom.createPortal(
        <>
            <div style={OVERLAY_STYLES} onClick={() => console.log('clicked')} />
            <div style={MODAL_STYLES}>
                <Link to="./shoppingcart"><button classname="modal-cart" id="modal-cart-btn" onClick={onClose}>Till kassan</button></Link>
                <button classname="close-cart" id="close-cart-btn" onClick={onClose}>&#10006;</button>

                <div className="modal-content">
                    <section className="modal-container">
                        <h1 className="modal-h1">Varukorg</h1>


                        <div className="modal-column">
                            <div className="modal-row">
                                <div className="modal-title" id="movie-title1">
                                    <p>Black Panther:</p>
                                </div>
                                <div className="modal-price" id="modal-price1"><p>199 kr</p></div>
                                <aside className="delete-button"><IconButton aria-label="delete"><DeleteForeverIcon style={{ fill: '#000000' }} /></IconButton></aside>
                            </div>

                            <div className="modal-row">
                                <div className="modal-title" id="movie-title2">
                                    <p>The Lego Movie:</p>

                                </div>

                                <div className="modal-price" id="modal-price2"><p>149 kr</p></div>
                                <aside className="delete-button"><IconButton aria-label="delete"><DeleteForeverIcon style={{ fill: '#000000' }} /></IconButton></aside>
                            </div>
                        </div>

                        <div className="modal-finish-row">
                            <p>Summa: 348 kr</p>
                        </div>
                    </section>
                </div>






            </div>




        </>,
        document.getElementById('portal')
    )
}

