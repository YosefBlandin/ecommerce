import React, { useContext } from 'react';
import AppContext from "../context/AppContext";

import '../styles/components/Payment.scss';

const Payments = () => {
    const { state } = useContext(AppContext);
    const { cart } = state;
    return (
        <div className="payment">
            <div className="payment__content">
                <h3>Resumen del pedido:</h3>
                {cart.map(item => (
                    <div className="payment__item" key={item.title}>
                        <h4>{item.title}</h4>
                        <span>
                            $
                            {""}
                            {item.price}
                        </span>
                    </div>
                ))}
                <div className="payment__button">
                    Pagar
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Payments;