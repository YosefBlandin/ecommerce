import React from 'react';
import { Link } from 'react-router-dom';
import SearchProducts from './SearchProducts';
import MenuButton from './MenuButton';
import BottomNavbar from './BottomNavbar';

import '../styles/components/header.scss';

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="header__navbar">
          <Link to="/">
            <img
              className="header__logo"
              src="https://i.imgur.com/qujHpQX.png"
              alt="Brand logo"
            />
          </Link>
          <SearchProducts />
          <MenuButton />
        </nav>
        <BottomNavbar />
      </header>
    </>
  );
};

export default Header;
