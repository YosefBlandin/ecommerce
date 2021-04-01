import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../containers/Home";
import ProductsCategories from "../containers/ProductsCategories";
import Checkout from "../containers/Checkout";
import Information from "../containers/Information";
import Success from "../containers/Success";
import NotFound from "../containers/NotFound";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

import "../styles/global.scss"

const App = () => {
    const initialState = useInitialState();

    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/productscategories" component={ProductsCategories} />
                        <Route exact path="/checkout" component={Checkout} />
                        <Route exact path="/checkout/information" component={Information} />
                        <Route exact path="/checkout/success" component={Success} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )
}


export default App
