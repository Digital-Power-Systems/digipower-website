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

            <hr />
            <div  className="product-overview-description">{props.description}</div>
            {/* To have to highlight the corresponding item in product menu (Route to the page as well obv) to clicked item in product overview page in Home */}
           <Link to={props.URL}><button className="product-overview-btn" onClick={() =>props.setSelected(props.URL.slice(9))}><strong>Know more...</strong></button></Link> 

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