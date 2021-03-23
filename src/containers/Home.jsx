import React from 'react';
import '../styles/components/App.scss';
import Products from '../components/Products';
import About from '../components/About';
const Home = () => (
  <>
    <main className="main">
      <img src="https://i.imgur.com/ywd7Xzu.png" alt="Hero Img" />
      <h1>
        Machete Store <br />
        Ropa Hecha en Casa
      </h1>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="whitesmoke"
          fillOpacity="1"
          d="M0,96L120,112C240,128,480,160,720,154.7C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </main>

    <Products />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="whitesmoke"
        fillOpacity="1"
        d="M0,96L120,112C240,128,480,160,720,154.7C960,149,1200,107,1320,85.3L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
      ></path>
    </svg>
    <About />
  </>
);

export default Home;
