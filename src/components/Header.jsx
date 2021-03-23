import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Header.scss';

const Header = () => {
  const [item, setItem] = useState(false);
  const [menu, setMenu] = useState('navbar__menu--disabled');
  return (
    <>
      <header className="header">
        <nav className="header__navbar">
          <Link to="/">
            <img
              className="navbar__logo"
              src="https://i.imgur.com/KqEG5iD.png"
              alt="Brand logo"
            />
          </Link>
          <div
            className={
              item
                ? 'navbar__hamburguer navbar__hamburguer--active'
                : 'navbar__hamburguer'
            }
            onClick={() => {
              setMenu(
                menu === 'navbar__menu--disabled'
                  ? 'navbar__menu--enabled'
                  : 'navbar__menu--disabled'
              );
              !item ? setItem(true) : setItem(false);
            }}
          >
            <div className="navbar__item navbar__item--active"></div>
            <div className="navbar__item navbar__item--active"></div>
            <div className="navbar__item navbar__item--active"></div>
          </div>
        </nav>

        <ul className={menu}>
          <li>
            <a href="#about">Contacto</a>
          </li>
          <li>
            <a href="#about"> Acerca</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
