import React from 'react';
import { Link } from 'react-router-dom';
import useToTop from '../utils/useToTop';

import heroImg from '../landscape.png';
import '../styles/containers/home.scss';

const Home = () => {
  useToTop();
  return (
    <>
      <Link to="/categories" className="main">
        <img src="https://i.imgur.com/pDp7bJA.png" alt="Sueter Machete Store" />

        <img src="https://i.imgur.com/h4WJAn8.png" alt="Camisa Machete Store" />

        <img src="https://i.imgur.com/BaPSprk.png" alt="Gorra Machete Store" />

       </Link>

    </>
  );
};

export default Home;
