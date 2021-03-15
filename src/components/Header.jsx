import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import brandLogo from "../assets/img/logo1.png";
import "../styles/components/Header.scss";

const Header = () => {
    const { state } = useContext(AppContext);
    const { cart } = state;

    return (
        <>
            <header className="header">
                <nav className="header__navbar">
                    <Link to="/">
                        <img className="navbar__logo" src={brandLogo} alt="Brand logo" />
                    </Link>
                    <div className="navbar__menu">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <ul>
                        <li>Contacto</li>
                        <li>Acerca</li>
                    </ul>
                </nav>

                <Link to="/checkout">
                    <nav className="header__check">


                        <i className="fas fa-shopping-cart" title="checkout"></i>
                        <span className="header__alert">{cart.length}</span>


                    </nav>

                </Link>
            </header>

        </>
    )
}

export default Header
