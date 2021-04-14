import React from 'react';

import "../styles/components/searchProducts.scss";

const SearchProducts = () => {
        return (
            <label className="searchProducts" htmlFor="search">
                <input type="text" placeholder="¿Qué estas buscando?"/>
            </label>
        )
};

export default SearchProducts;