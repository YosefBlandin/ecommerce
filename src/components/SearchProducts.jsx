import React from 'react';

import "../styles/components/searchProducts.scss";

const SearchProducts = () => {
        return (
            <label htmlFor="search">
                <input type="text" placeholder="¿Què estas buscando?"/>
            </label>
        )
};

export default SearchProducts;