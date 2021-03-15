import React from "react";
import Products from "../components/Products";
import "../styles/components/App.scss"
import initialState from "../initialState";
import heroImg from "../assets/img/wolf.png"
const Home = () => (
    <>
        <main className="main">
            <h1>Machete Store <br />
                Estilo para todos
            </h1>
            <img src={heroImg} alt="Hero Img" />
        </main>
        <Products products={initialState.products} />
    </>
)



export default Home