import React, { useContext} from 'react';
import AppContext from "../context/AppContext";

import "../styles/components/checkoutItem.scss";

const CheckoutItem = ({isButton}) => {
    const { stateReduced, dispatch } = useContext(AppContext);
    const { cart } = stateReduced;
    const handleRemoveFromCart = (element) => {
        dispatch({type: "REMOVE_FROM_CART", payload: element})
    }
    return (
        <>
                    {cart.map((element, i) => (
                        <div key={element.id} className="checkout__item">
                            <img src={element.image} alt="" />
                            <div>
                                <h4>{element.title}</h4>
                                <span>Precio: {"$" + element.price}</span>
                            </div>
                            {isButton ? (
                            <button type="button">
                                <i className="fas fa-trash-alt" title="delete" onClick={() => handleRemoveFromCart(element)}></i>
                            </button>
                            ) : false}
                        </div>
                    ))}
            </>
    )
}


export default CheckoutItem