import React from 'react';
import './ProductCard.css';

export default function ProductCard({details}) {
    return (
        <div className="product-card-container">
            <div className="product-card-image"> 
                <img src={details.img} alt="product image" />
            </div>
           <div className="product-card-info">
                <h3 className="product-card-title">{details.title}</h3>
                <div style={{color: "gray"}}> {details.company}</div>
                <div><strong>{details.price}</strong></div>
                <div className="product-card-description">{details.description}</div>
           </div>
        </div>
    )
}
