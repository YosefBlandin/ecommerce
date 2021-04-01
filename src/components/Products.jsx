import React, { useContext, useEffect, useRef, useState } from "react";
import ProductItem from "./ProductItem";
import AppContext from "../context/AppContext";

import "../styles/components/products.scss";

const Products = ({button, description}) => {
    const { state, addToCart } = useContext(AppContext);
    const { sweaters, caps, tShirts } = state;
    const handleAddToCart = (product) => () => {
        addToCart(product)
    }
    return (
                <div className="products">
                    {sweaters.map(
                        product => 
                        (<ProductItem
                          key={product.id}
                          product={product}
                          handleAddToCart={handleAddToCart} 
                          button={button}
                          description={description}
                          />)
                          )}
                    {tShirts.map(
                        product => 
                        (<ProductItem
                        key={product.id} 
                        product={product} 
                        handleAddToCart={handleAddToCart} 
                        button={button}
                        description={description}
                        />)
                        )}
                    {caps.map(
                        product => 
                        (<ProductItem
                        key={product.id} 
                        product={product} 
                        handleAddToCart={handleAddToCart} 
                        button={button}
                        description={description}
                        />)
                        )}
                </div>
    )
}

export default Products
