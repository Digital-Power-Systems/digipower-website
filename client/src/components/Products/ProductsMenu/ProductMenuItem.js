import React from 'react';

import './ProductMenu.css';
import {Link} from 'react-router-dom';

export default function ProductMenuItem(props) {
    return (
       <>

        <div className={`product-menu-item-container${props.selected?"-selected":""}`} onClick={props.onClick}>
            <Link to={props.URL}>
                    <div className={`product-menu-product-description${props.selected?"-selected":""}`}>
                        <strong>{props.description}</strong>
                    {props.selected?<hr />:""}
                   
                    </div>
                    <div>
                         
                                <div className={`product-image-container${props.selected?"-selected":""}`}>
                                    <img className="product-image" src={props.img} alt="inverter-icon" />
                                </div>
                          
                    </div>
            </Link>
                </div>

      </>  
    )
}
