import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import "../styles/components/checkout.scss";

const Checkout = () => {
    const { state, removeFromCart } = useContext(AppContext);
    const { cart } = state;


    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const sum = cart.map(e => e.price).reduce(reducer)
        return sum
    }

    return (
        <div className="checkout ">
                {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>Sin Pedidos</h3>}
            <div className="checkout__content">
                    {cart.map((element, i) => (
                        <div key={element.id} className="checkout__item">
                            <img src={element.image} alt="" />
                            <div>
                                <h4>{element.title}</h4>
                                <span>Precio: {"$" + element.price}</span>
                            </div>
                            <button type="button">
                                <i className="fas fa-trash-alt" title="delete" onClick={() => removeFromCart(element, i)}></i>
                            </button>
                        </div>
                    ))}
            </div>
            <div className="checkout__sidebar">
                {cart.length > 0 ? (
                    <>
                        <h3>Precio Total: ${handleSumTotal()}</h3>
                        <Link to="/checkout/information">
                            Continuar Pedido
                        </Link>
                    </>
                ) : false}

            </div>
        </div>
    );
};


export default Checkout
