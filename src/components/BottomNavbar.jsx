import React, { useContext } from 'react';
import {Link } from "react-router-dom";
import AppContext from "../context/AppContext";

import "../styles/components/bottomNavbar.scss";

const BottomNavbar = () => {
    const {stateReduced}  = useContext(AppContext);
    console.log(stateReduced)
    return (
        <nav className="bottomNavbar">
            <ul>
                <Link to="/"><li><i className="fas fa-home"></i></li></Link>
                <Link to="/checkout"><li><i className="fas fa-store"></i><span>{stateReduced.cart.length > 0 ? stateReduced.cart.length : 0}</span></li></Link>
                <Link to="/about"><li><i className="fas fa-info-circle"></i></li></Link>
            </ul>    
        </nav>  
    )
}

export default BottomNavbar