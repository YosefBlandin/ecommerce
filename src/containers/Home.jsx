import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import sweater from "../sweater.png";
import tShirt from "../tshirt.png"
import cap from "../cap.png"
import heroImg from "../landscape.png"

import "../styles/components/home.scss";

const Home = () => {
    return (
    <>
        <Link to="/categories" className="main">
                <img  src={sweater} alt="Sueter Machete Store"/>
            
            
            <img  src={tShirt} alt="Camisa Machete Store"/>
            
            
            <img  src={cap} alt="Gorra Machete Store"/>
            
            
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
