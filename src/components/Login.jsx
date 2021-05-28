import './login.css'
import React, { Component } from 'react'
import { Link } from "react-router-dom";

const Login = () => {

    return (
        <section className="login-content">
            <div className="login-container">
                <div className="login-column">
                    <h1 className="login-h1">Logga in</h1>
                    <input type="text" className="mail" placeholder="E-post"></input>
                    <input type="text" className="password" placeholder="Lösenord"></input>
                    
                    <div className="remember-row">  
                        <button className="remember-me"></button>
                        <p>Kom ihåg mig</p>
                    </div>
                    
                        <button className="login-btn">Logga in</button>
                        <div className="forgot-pass">
                            <a href="">Glömt lösenord?</a>
                        </div>
                        <div className="create-acc">
                            <a href="">Skapa konto</a>
                        </div>
                </div>

                <aside className="aside-login">
                        <p>eller</p>
                        <div className="google">
                            <button>Logga in med Google</button>
                        </div>
                        <div className="facebook">
                            <button>Logga in med Facebook</button>
                        </div>
                </aside>
            </div>
        </section>
                
    )

}

export default Login;