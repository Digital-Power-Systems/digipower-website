import React, { Component } from 'react'

import ProductList from './ProductList';
import ProductMenu from './ProductsMenu/ProductMenu';

import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';

import './ProductsContainer.css'

export default class ProductsContainer extends Component {
    componentDidMount(){
        console.log(this.props.location);
    }
    render() {
        return (
            <div className="product-container">
               
                <h1>Our Products</h1>
                <ProductMenu />
                <ProductList location={this.props.location} />
                
             
            </div>
        )
    }
}
