import React from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router-dom'
import './modal.css'




const MODAL_STYLES = {
    position:'fixed',
    top: '55%',
    left: '90%',
    height: '400px',
    width: '150px',
    transform: 'translate(-50%, -50%)',
    backgroundColor:'#FFF',
    padding:'50px',
    zIndex: 1000


}

const OVERLAY_STYLES = {
    position:'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, .7)',
    zIndex: 1000

    

}


export default function Modal({open, children, onClose}){
    if(!open) return null
    return ReactDom.createPortal(
        <>
        <div style={OVERLAY_STYLES} onClick={() => console.log('clicked')}/>
        <div style={MODAL_STYLES}>
        <Link to="./shoppingcart"><button classname="checkout-cart" id="checkout-cart-btn" onClick={onClose}>Till kassan</button></Link>
            <button classname="close-cart" id="close-cart-btn" onClick={onClose}>Stäng</button>

            {children}
            
           
        </div>
        </>,
        document.getElementById('portal')
    )
}

