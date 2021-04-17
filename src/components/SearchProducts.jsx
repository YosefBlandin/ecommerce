import React from 'react';
import AppContext from "../context/AppContext";

import "../styles/components/searchProducts.scss";

const SearchProducts = () => {
        return (
            <>
            <label className="searchProducts" htmlFor="search">
                <i className="fas fa-search"></i>
                <input
                className="searchProducts__input" 
                type="text" 
                placeholder="¿Qué estas buscando?"/>
            </label>
            </>
        )
};

export default SearchProducts;