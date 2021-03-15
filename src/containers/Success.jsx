import React from 'react';
import '../styles/components/Success.scss';

const Success = () => {
    return (
        <div className="success">
            <div className="success__content">
                <h2>Nombre, Gracias por tu compra</h2>
                <span>Tu pedido llegara en 3 dias a tu dirección:</span>
                <div className="success__map">Google Maps</div>
            </div>
        </div>
    );
};

export default Success;