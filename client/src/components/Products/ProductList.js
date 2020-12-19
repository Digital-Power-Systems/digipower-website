import React, {useState} from 'react';
import solarLight from '../../assets/Solar/solar-light-1.jpg';
import solarInverter from '../../assets/Solar/solar-inverter-UTL.jpg';

import ProductCard from './ProductCard';


import './ProductList.css';

export default function ProductList(props) {
    const products = [{id: 1, type: "solar", title: "Solar indoor lamp", company: "WAREE", price:"Rs. 30,000", description: "Lighten up and save bills with the power of the sun. Premium solar lamps from WAREE, India's leading solar manufacturer",  img: solarLight},
    {id: 2, type: "solar", title: "Solar inverter", company: "UTL Solar", price:"Rs. 30,000", description: "Lighten up and save bills with the power of the sun. Premium solar inverters from UTL Solar, India's leading solar manufacturer",  img: solarInverter}]
    return (
        <>
         <p>All the pwoli inverters {props.location.search}</p>
        <div className="product-list-container">
           

            {products.map( (item) => { return <ProductCard details={item} />})}

        </div>
        </>
    )
}
