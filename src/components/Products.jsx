import React, { useContext, useEffect, useRef, useState } from 'react';
import Product from './Product';
import AppContext from '../context/AppContext';
import '../styles/components/Products.scss';

const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const [animation, setAnimation] = useState(false);
  const { sweaters, caps, tShirts } = state;
  const handleAddToCart = (product) => () => {
    addToCart(product);
  };
  const containerRef = useRef(null);
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };
  const callback = (entries) => {
    const [entry] = entries;
    setAnimation(entry.isIntersecting);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (containerRef.current) observer.observe(containerRef.current);
  }, []);

  return (
    <>
      <section className="categories">
        <h4 ref={containerRef}>Suéteres</h4>
        <div
          className={
            animation
              ? 'product__container product__container--entry'
              : 'product__container'
          }
        >
          {sweaters.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>

      <section className="categories">
        <h4>Franelas</h4>
        <div
          className={
            animation
              ? 'product__container product__container--entry'
              : 'product__container'
          }
        >
          {tShirts.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>

      <section className="categories">
        <h4>Gorras</h4>
        <div
          className={
            animation
              ? 'product__container product__container--entry'
              : 'product__container'
          }
        >
          {caps.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
