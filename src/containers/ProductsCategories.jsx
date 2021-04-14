import React, {useState } from 'react';
import Products from "../components/Products";
import useToTop from "../utils/useToTop";

import "../styles/components/productsCategories.scss";

const ProductsCategories = () => {
    const [contain, setContain] = useState("Todos");
    useToTop()
    
    return (
        <section className="productsCategories">
            <h3>{contain}</h3>
            <section className="categoriesSidebar">
                    <ul className="categoriesSidebar__menu">
                            <li onClick={() => setContain('Todos')}>Todos</li>
                            <li onClick={() => setContain('Sueteres')}>Sueteres</li>
                            <li onClick={() => setContain('Franelas')}>Franelas</li>
                            <li onClick={() => setContain('Gorras')}>Gorras</li>
                    </ul>
            </section>
            <Products category={contain}/>
        </section>
    )
}

export default ProductsCategories