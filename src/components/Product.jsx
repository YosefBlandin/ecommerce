import React from 'react'

const Product = ({ product, handleAddToCart }) => {
    const { image, title, price } = product;
    return (
        <div className="products">
            <img className="products__img" src={image} alt={title} />
            <div className="products__info">

                <h2>{title}</h2>
                <span>$ {" "}{price}</span>

            </div>
            <button type="button" onClick={handleAddToCart(product)}>Añadir al carrito</button>

        </div>

    )
}

export default Product
