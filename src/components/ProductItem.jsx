import React, {useContext} from 'react';
import AppContext from '../context/AppContext';


import "../styles/components/productItem.scss";

const ProductItem = ({ product  }) => {
    const { image, title, price } = product;
    const { dispatch} = useContext(AppContext);
    const handleAddToCart = (product) => {
        dispatch({type: "ADD_TO_CART", payload: product})
    }
    return (
        <article className="productItem">
            <img width="100px" className="productItem__img" src={image} alt={title} />
            
                <div className="productItem__info">

                <h2>{title}</h2>
                <span>{price}{" "}$</span>

            </div>
            <i 
            className="fas fa-heart"
            type="button" onClick={() => handleAddToCart(product)}></i>

        </article>

    )
}

export default ProductItem
