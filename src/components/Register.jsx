import './register.css';
import React, { Component } from 'react'
import { Link } from "react-router-dom";


const Register = () => {

    return (
        <div className="register-wrap">
            <h2 className="title-create-account">Skapa konto</h2>
            <section className="create-account">
                <input className="ca-input-field" type="text" placeholder="E-post"/>
                <input className="ca-input-field" type="text" placeholder="Välj lösenord"/>
                <input className="ca-input-field" type="text" placeholder="Upprepa lösenord"/>
                <button id="button-create-account">Skapa konto</button>
            </section>
        </div>
    )
}

export default Register;