import React, { useContext } from 'react';
import {Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import "../styles/components/bottomNavbar.scss";

const BottomNavbar = () => {
    const {state}  = useContext(AppContext);
    const { cart } = state;
    return (
        <nav className="bottomNavbar">
            <ul>
                <Link to="/"><li><i className="fas fa-home"></i></li></Link>
                <li><i className="fas fa-store"></i><span>{cart.length ? cart.length : false}</span></li>
                <li><i className="fas fa-info-circle"></i></li>
            </ul>    
        </nav>  
    )
}

export default BottomNavbar