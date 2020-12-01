import React from 'react';

import ProductMenu from './ProductMenu';
import ProductCard from './ProductCard';

import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';

export default function ProductsContainer() {
    return (
        <div>
            <Router>
                <ProductMenu />
                <Switch>
                    <Route path="/" ></Route>
                </Switch>
            </Router>
        </div>
    )
}
