import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import Skeleton from 'react-loading-skeleton';

import '../styles/components/productItem.scss';

const ProductItem = ({ product, loading }) => {
  const {image, title, price} = product;
  const { dispatch } = useContext(AppContext);
  const [ animation, setAnimation ] = useState(false);
  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };
  return (
    <article className="productItem">
      {loading ? (
        <Skeleton height="400px" />
      ) : (
        <>
          <img
            width="100px"
            className="productItem__img"
            src={image}
            alt={title}
          />
          <div className="productItem__info">
            <h2>{title}</h2>
            <span>{price} $</span>
          </div>
          <i
            className={!animation ? "fas fa-heart": "fas fa-heart heartAnimation"}
            type="button"
            onClick={() => { 
            handleAddToCart(product);
            setAnimation(!animation);
            }}
          ></i>
        </>
      )}
    </article>
  );
};

export default ProductItem;
