import React from 'react';

import "../styles/components/productItem.scss";

const ProductItem = ({ product, handleAddToCart }) => {
    const { image, title, price } = product;
    return (
        <article className="productItem">
            <img width="100px" className="productItem__img" src={image} alt={title} />
            
                <div className="productItem__info">

                <h2>{title}</h2>
                <span>{price}{" "}$</span>

            </div>
            <button type="button" onClick={handleAddToCart(product)}>Añadir al carrito</button>

        </article>

    )
}

export default ProductItem
