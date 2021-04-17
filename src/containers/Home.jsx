import React from "react";
import { Link } from "react-router-dom";
import useToTop from "../utils/useToTop";

import heroImg from "../landscape.png"
import "../styles/components/home.scss";

const Home = () => {
    useToTop()
    return (
    <>
        <Link to="/categories" className="main">
                <img  src="https://i.imgur.com/pDp7bJA.png" alt="Sueter Machete Store"/>
            
            
            <img  src="https://i.imgur.com/h4WJAn8.png" alt="Camisa Machete Store"/>
            
            
            <img  src="https://i.imgur.com/BaPSprk.png" alt="Gorra Machete Store"/>
            
            
            <img src={heroImg} alt="Imagen de la tienda Machete Store" />
        </Link>
        <article className="main__section">
                <h3> Ve nuestros productos por categorias</h3>
                <Link to="/categories">
                <button>Ver productos</button>
                </Link>
            </article>
    </>
)}



export default Home
