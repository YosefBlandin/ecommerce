import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/menuSidebar.scss';

const MenuSidebar = ({ show, setShow }) => {
  return (
    <section className={!show ? 'menuSidebar' : 'menuSidebar menuSidebar--on'}>
      <ul>
        <Link to="/" onClick={() => setShow(false)}>
          <li>Inicio</li>
        </Link>
        <Link to="/categories" onClick={() => setShow(false)}>
          <li>Productos</li>
        </Link>
        <Link to="/checkout" onClick={() => setShow(false)}>
          <li>Carrito</li>
        </Link>
        <Link to="/socials" onClick={() => setShow(false)}>
          <li>Contacto</li>
        </Link>
        <Link to="/about" onClick={() => setShow(false)}>
          <li>Acerca de Machete Store</li>
        </Link>
      </ul>
    </section>
  );
};

export default MenuSidebar;
