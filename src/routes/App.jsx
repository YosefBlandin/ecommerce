import React, { useContext, useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import ProductsCategories from '../containers/ProductsCategories';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import initialState from '../initialState';
import AppContext from '../context/AppContext';
import reducer from '../reducer/reducer';
import '../styles/global.scss';

const App = () => {
  const [stateReduced, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ stateReduced, dispatch }}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/categories" component={ProductsCategories} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/checkout/information" component={Information} />
            <Route exact path="/checkout/success" component={Success} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
