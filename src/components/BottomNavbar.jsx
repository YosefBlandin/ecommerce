import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AppContext from '../context/AppContext';

import '../styles/components/bottomNavbar.scss';

const BottomNavbar = () => {
  const { stateReduced } = useContext(AppContext);
  const totalItems = () =>
    stateReduced.cart.map((e) => e.amount).reduce((acc, curr) => acc + curr);

  return (
    <nav className="bottomNavbar">
      <ul>
          <li>
            <NavLink to="/categories" className="fas fa-tshirt"></NavLink>
          </li>
          <li>
            <NavLink to="/checkout" className="fas fa-store">
              <span>{stateReduced.cart.length > 0 ? totalItems() : false}</span>

            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="fas fa-info-circle"></NavLink>
          </li>
      </ul>
    </nav>
  );
};

export default BottomNavbar;
