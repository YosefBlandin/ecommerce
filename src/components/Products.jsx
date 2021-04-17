import React, { useContext, useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import AppContext from '../context/AppContext';
import axios from '../axios';
import '../styles/components/products.scss';

const Products = ({ category }) => {
  const { stateReduced, dispatch } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  let { products } = stateReduced;
  const fetchData = () =>
    new Promise((resolve, reject) => {
      const response = axios.get('/products');
      resolve(response);
      reject('Error');
    });
  const getSweaters = () =>
    products.map(
      (e) =>
        e.type === 'sueteres' && (
          <ProductItem key={e.id} product={e} loading={loading} />
        )
    );
  const getCaps = () =>
    products.map(
      (e) =>
        e.type === 'gorras' && (
          <ProductItem key={e.id} product={e} loading={loading} />
        )
    );
  const getShirts = () =>
    products.map(
      (e) =>
        e.type === 'franelas' && (
          <ProductItem key={e.id} product={e} loading={loading} />
        )
    );

  useEffect(() => {
    fetchData()
      .then(({ data }) => {
        setTimeout(() => setLoading(false), 1000);
        return dispatch({ type: 'FETCH_DATA', payload: data });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="products">
      {category === 'Todos' ? (
        <>
          <>{getSweaters()}</>
          <>{getCaps()}</>
          <>{getShirts()}</>
        </>
      ) : (
        false
      )}
      {category === 'Sueteres' ? getSweaters() : false}
      {category === 'Gorras' ? getCaps() : false}
      {category === 'Franelas' ? getShirts() : false}
    </div>
  );
};

export default Products;
