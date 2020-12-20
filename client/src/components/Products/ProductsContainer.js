import React, { Component } from 'react'

import ProductList from './ProductList';
import ProductMenu from './ProductsMenu/ProductMenu';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './ProductsContainer.css';

import {setSelected} from '../../redux/actions/productActionCreator'
import {connect} from 'react-redux';

class ProductsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { selected: "" };
        this.setSelected = this.setSelected.bind(this);
    }
    setSelected(choice) {

    }
    componentDidMount() {
        console.log(this.props.location);
    }
    render() {
        return (
            <div className="product-container">

                <h1>Our Products</h1>
                <h3>Pick a category</h3>
                <ProductMenu location={this.props.location} selected={this.props.selected} setSelected={this.props.setSelected}/>
                <ProductList location={this.props.location} selected={this.props.selected} />


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selected: state.product.selected
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSelected: (item) => dispatch(setSelected(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);