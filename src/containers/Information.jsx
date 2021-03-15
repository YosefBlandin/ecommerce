import React, { useContext, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import AppContext from "../context/AppContext";

import "../styles/components/Information.scss";

const Information = (props) => {
    const { state, addToBuyer } = useContext(AppContext);
    const form = useRef(null);
    const { cart } = state;
    const history = useHistory();

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer = {
            "name": formData.get("name"),
            "email": formData.get("email"),
            "address": formData.get("address"),
            "apartment": formData.get("apartment"),
            "city": formData.get("city"),
            "country": formData.get("country"),
            "state": formData.get("state"),
            "cp": formData.get("cp"),
            "phone": formData.get("phone"),
        }
        addToBuyer(buyer);
        history.push("/checkout/payment")
    }

    return (
        <div className="information">
            <div className="information__content">
                <div className="information__head">
                    <h2>Contact information</h2>
                </div>
                <div className="information__form">
                    <form ref={form}>
                        <label htmlFor="name">
                            Full Name
              <input type="text" placeholder="Full Name" name="name" id="name" />
                        </label>
                        <label htmlFor="email">
                            Email
              <input type="text" placeholder="Email" name="email" id="email" />
                        </label>
                        <label htmlFor="address">
                            Address
              <input
                                type="text"
                                placeholder="Address"
                                name="address"
                                id="address"
                            />
                        </label>
                        <label htmlFor="apto">
                            APT
              <input type="text" placeholder="APT" name="apartment" id="apto" />
                        </label>
                        <label htmlFor="country">
                            Country
              <input
                                type="text"
                                placeholder="Country"
                                name="country"
                                id="country"
                            />
                        </label>
                        <label htmlFor="state">
                            State
              <input type="text" placeholder="State" name="state" id="state" />
                        </label>
                        <label htmlFor="city">
                            City
              <input type="text" placeholder="City" name="city" id="city" />
                        </label>
                        <label htmlFor="cp">
                            Postal Code
              <input type="text" placeholder="Postal Code" name="cp" id="cp" />
                        </label>
                        <label htmlFor="phone">
                            Phone
              <input type="text" placeholder="Prone" name="phone" id="phone" />
                        </label>
                    </form>
                </div>
                <div className="information__buttons">
                    <div onClick={() => props.history.goBack()} className="information__back">Go Back</div>
                    <div className="information__next">
                        <button onClick={() => handleSubmit()} type="button">Pagar</button>
                    </div>
                </div>
            </div>
            <div className="information__sidebar">
                <h3 className="sidebar__title">Productos a Comprar:</h3>
                {cart.map((item) => (
                    <div className="information__item" key={item.title}>
                        <div className="information__element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                    </div>
                )

                )}

            </div>
        </div>
    )
};




export default Information