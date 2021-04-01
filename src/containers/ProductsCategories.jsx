import React from 'react'
import Products from "../components/Products";

const ProductsCategories = () => {
    return (
        <section className="productsCategories">
            <Products button={true} description={true}/>
        </section>
    )
}

export default ProductsCategories