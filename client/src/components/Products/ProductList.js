import React, {useState} from 'react';

import solarLight from '../../assets/Solar/solar-light-1.jpg';
import solarInverter from '../../assets/Solar/solar-inverter-UTL.jpg';
import amaronBattery from '../../assets/Battery/amaron-battery.jpg';
import axonBattery from '../../assets/Battery/axon-battery.jpg';
import exideBattery from '../../assets/Battery/exide-battery.jpeg';
import microBattery from '../../assets/Battery/micro-battery.jpeg';
import livfastBattery from '../../assets/Battery/livfast-battery.jpeg';
import livguardBattery from '../../assets/Battery/livguard-battery.jpg';
import livfastInverter from '../../assets/Inverter/livfast-inverter.jpg';
import livguardInverter from '../../assets/Inverter/livguard-inverter.jpg';

import ProductCard from './ProductCard';


import './ProductList.css';

export default function ProductList(props) {
    const products = [{id: 1, type: "solar", title: "Solar indoor lamp", company: "WAREE", price:"Rs. 30,000", description: "Lighten up and save bills with the power of the sun. Premium solar lamps from WAREE, India's leading solar manufacturer",  img: solarLight},
    {id: 2, type: "solar", title: "Solar inverter", company: "UTL Solar", price:"Rs. 30,000", description: "Lighten up and save bills with the power of the sun. Premium solar inverters from UTL Solar, India's leading solar manufacturer",  img: solarInverter},
    {id: 3, type: "battery", title: "Amaron Battery", company: "Amaron", price:"Rs. 3,000", description: "Charge up with batteries from Amaron",  img: amaronBattery},
    {id: 4, type: "battery", title: "Axon Battery", company: "Axon", price:"Rs. 3,000", description: "Charge up with batteries from Axon",  img: axonBattery},
    {id: 5, type: "battery", title: "Exide Battery", company: "Exide", price:"Rs. 3,000", description: "Charge up with batteries from Exide",  img: exideBattery},
    {id: 6, type: "battery", title: "Micro Battery", company: "Micro", price:"Rs. 3,000", description: "Charge up with batteries from Micro",  img: microBattery},
    {id: 7, type: "battery", title: "LivFast Battery", company: "LivFast", price:"Rs. 3,000", description: "Charge up with batteries from LivFast",  img: livfastBattery},
    {id: 8, type: "battery", title: "LivGuard Battery", company: "LivGuard", price:"Rs. 3,000", description: "Charge up with batteries from LivGuard",  img: livguardBattery},
    {id: 9, type: "inverter", title: "LivFast Inverter", company: "LivFast", price:"Rs. 45,000", description: "Keep the power going with LivFast inverters",  img: livfastInverter},
    {id: 10, type: "inverter", title: "LivGuard Inverter", company: "LivGuard", price:"Rs. 55,000", description: "Keep the power going with LivGuard inverters",  img: livguardInverter}]
    return (
        <>

        <div className="product-list-container">
           

            {products.map((item) => { if(props.selected.slice(10,)===item.type){return <ProductCard key={item.id} details={item} />}})}

        </div>
        </>
    )
}
