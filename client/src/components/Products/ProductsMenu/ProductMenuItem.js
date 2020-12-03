import React from 'react';

import './ProductMenu.css';
import {Link} from 'react-router-dom';

export default function ProductMenuItem(props) {
    return (
       <>
            <Link to={props.URL}>
                <div className="product-menu-item-container">
                    <div className="product-menu-product-description">
                        <strong>{props.description}</strong>
                    </div>
                    <div>
                            <div className={`product-image-outer-cirlce${props.selected?"-selected":""}`}>
                                <div className="product-image-container">
                                    <img className="product-image" src={props.img} alt="inverter-icon" />
                                </div>
                            </div>
                    </div>
                </div>
            </Link>
      </>  
    )
}
