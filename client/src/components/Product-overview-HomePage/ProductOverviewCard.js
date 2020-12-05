import React from 'react'

import { Link } from 'react-router-dom';

import './ProductOverviewCard.css'

export default function ProductOverviewCard(props) {
    return (
        <div className="product-overview-card-container">
            <div><img className="product-overview-image" src= {props.img} alt="product-card"/></div>
            <h3  className="product-overview-header">{props.header}</h3>
            <div  className="product-overview-description">{props.description}</div>
           <Link to={props.URL}><button>Know more...</button></Link> 
        </div>
    )
}
