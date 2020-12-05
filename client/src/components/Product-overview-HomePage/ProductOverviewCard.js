import React from 'react'

import { Link } from 'react-router-dom';

import {setSelected} from '../../redux/actions/productActionCreator';
import {connect} from 'react-redux';

import './ProductOverviewCard.css'

function ProductOverviewCard(props) {
    return (
        <div className="product-overview-card-container">
            <div><img className="product-overview-image" src= {props.img} alt="product-card"/></div>
            <h3  className="product-overview-header">{props.header}</h3>
            <div  className="product-overview-description">{props.description}</div>
            {/* To have to highlight the corresponding item in product menu (Route to the page as well obv) to clicked item in product overview page in Home */}
           <Link to={props.URL}><button onClick={() =>props.setSelected(props.URL.slice(9))}>Know more...</button></Link> 
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        selected: state.product.selected
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSelected : (item) => dispatch(setSelected(item))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductOverviewCard);