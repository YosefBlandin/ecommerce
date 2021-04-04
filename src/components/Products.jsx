import React, { useContext, useEffect, useRef, useState } from "react";
import ProductItem from "./ProductItem";
import AppContext from "../context/AppContext";

import "../styles/components/products.scss";

const Products = ({type}) => {
    const { state, addToCart } = useContext(AppContext);
    const { sweaters, caps, tShirts } = state;
    const handleAddToCart = (product) => () => {
        addToCart(product)
    }
    return (
                <div className="products">
                    {type === "Todos" ? (
                        <>
                        {caps.map(
                            product => 
                            (<ProductItem
                            key={product.id} 
                            product={product} 
                            handleAddToCart={handleAddToCart}
                            />))}
                            {sweaters.map(
                                product => 
                                (<ProductItem
                                  key={product.id}
                                  product={product}
                                  handleAddToCart={handleAddToCart}
                                  />))}
                                {
                                    tShirts.map(
                                        product => 
                                        (<ProductItem
                                        key={product.id} 
                                        product={product} 
                                        handleAddToCart={handleAddToCart}
                                        />)
                                        )
                                }                        
                                  </>
                    ) : false}
                    {type === "Sueteres" ? (
                        sweaters.map(
                            product => 
                            (<ProductItem
                              key={product.id}
                              product={product}
                              handleAddToCart={handleAddToCart}
                              />)
                              )
                    ) :false}
                    {type === "Franelas" ? (
                        tShirts.map(
                            product => 
                            (<ProductItem
                            key={product.id} 
                            product={product} 
                            handleAddToCart={handleAddToCart}
                            />)
                            )
                    ) : false}
                    {type === "Gorras" ? (
                        caps.map(
                            product => 
                            (<ProductItem
                            key={product.id} 
                            product={product} 
                            handleAddToCart={handleAddToCart}
                            />)
                            )
                    ) : false}
                </div>
    )
}

export default Products
