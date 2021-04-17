import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../context/AppContext';

import '../styles/components/checkoutItem.scss';

const CheckoutItem = ({ isButton }) => {
  const { stateReduced, dispatch } = useContext(AppContext);
  const { cart } = stateReduced;
  const handleRemoveFromCart = (element) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: element });
  };
  return (
    <>
      {cart.map((element) => (
        <div key={element.id} className="checkout__item">
          <img src={element.image} alt={element.title} />
          <div>
            <h4>{element.title}</h4>
            <p>Cantidad: {element.amount}</p>
            <span>Precio: {'$' + element.price}</span>
          </div>
          {isButton ? (
            <button type="button" onClick={() => handleRemoveFromCart(element)}>
              <i className="fas fa-trash-alt" title="delete"></i>
            </button>
          ) : (
            false
          )}
        </div>
      ))}
    </>
  );
};

export default CheckoutItem;
