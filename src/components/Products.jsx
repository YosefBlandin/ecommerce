import React, {useContext} from "react";
import ProductItem from "./ProductItem";
import AppContext from "../context/AppContext";

import "../styles/components/products.scss";

const Products = ({category}) => {
    const  {stateReduced}  = useContext(AppContext);
    const { sweaters, caps, tShirts} = stateReduced;

    const getSweaters = () => {
        return sweaters.map(e => <ProductItem product={e} key={e.id} />)
    }
    const getCaps = () => {
        return caps.map(e => <ProductItem product={e} key={e.id} />)
    }
    const getTshirts = () => {
        return tShirts.map(e => <ProductItem product={e} key={e.id} />)
    }

    return (
                <div className="products">
                    {category === 'Todos' ? (
                       <>
                        <>{getSweaters()}</>
                        <>{getCaps()}</>
                        <>{getTshirts()}</>
                       </>
                    ) : false}
                    {category === "Sueteres" ? getSweaters() : false}
                    {category === "Gorras" ? getCaps() : false}
                    {category === "Franelas" ? getTshirts() : false}
                </div>
    )
}

export default Products
