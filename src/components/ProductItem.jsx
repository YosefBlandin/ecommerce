import React from 'react';

import "../styles/components/productItem.scss";

const ProductItem = ({ product, handleAddToCart, button, description }) => {
    const { image, title, price } = product;
    return (
        <article className="productItem">
            <img width="100px" className="productItem__img" src={image} alt={title} />
            {description ? (
                <div className="productItem__info">

                <h2>{title}</h2>
                <span>$ {" "}{price}</span>

            </div>
            ) : false}
            {button ? (<button type="button" onClick={handleAddToCart(product)}>Añadir al carrito</button>) : false}

        </article>

    )
}

export default ProductItem
