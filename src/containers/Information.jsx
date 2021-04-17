import React from 'react';
import CheckoutItem from '../components/CheckoutItem';
import useToTop from '../utils/useToTop';

import '../styles/components/information.scss';

const Information = () => {
  useToTop();
  return (
    <div className="information">
      <div className="information__content">
        <div className="information__head">
          <h2>Información de Pago</h2>
        </div>
        <div className="information__form">
          <form>
            <label htmlFor="name">
              Nombre Completo
              <input
                type="text"
                placeholder="Nombre Completo"
                name="name"
                id="name"
              />
            </label>
            <label htmlFor="email">
              Email
              <input type="text" placeholder="Email" name="email" id="email" />
            </label>
            <label htmlFor="address">
              Direccion
              <input
                type="text"
                placeholder="Dirección"
                name="address"
                id="address"
              />
            </label>
            <label htmlFor="phone">
              Telefono
              <input
                type="text"
                placeholder="Telefono"
                name="phone"
                id="phone"
              />
            </label>
          </form>
        </div>
        <div className="information__buttons">
          <button className="information__back">Volver</button>
          <div className="information__next">
            <button type="button">Pagar</button>
          </div>
        </div>
      </div>
      <div className="information__sidebar">
        <h3 className="sidebar__title">Productos a Comprar:</h3>
        <div className="sidebar__item">
          <CheckoutItem />
        </div>
      </div>
    </div>
  );
};

export default Information;
