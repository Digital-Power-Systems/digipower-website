import React from 'react'

import './ProductOverviewCard.css'

export default function ProductCard(props) {
    return (
        <div className="product-card-container">
            <div><img className="product-image" src= {props.img} alt="product-card"/></div>
            <h3  className="product-header">{props.header}</h3>
            <div  className="product-description">{props.description}</div>
        </div>
    )
}
