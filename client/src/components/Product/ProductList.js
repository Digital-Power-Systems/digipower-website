import React from 'react';
import cctv from '../../assets/SVGs/cctv.svg';
import solar from '../../assets/SVGs/solar-energy.svg'
import battery from '../../assets/SVGs/battery.svg'
import inverter from '../../assets/SVGs/inverter.png'
import ups from '../../assets/SVGs/UPS-icon.png'

import './ProductList.css';

export default function ProductList() {
    return (
       <>
            <div className="product-list-container">
                <h1> Explore our Power Products....</h1>
                <span> <img src={cctv} width="70rem" height="70rem" alt="cctv-icon" /> CCTV</span>
                <span> <img src={solar} width="70rem" height="70rem" alt="cctv-icon" /> Solar Products</span>
                <span> <img src={battery} width="70rem" height="70rem" alt="cctv-icon" /> Batteries</span>
                <span> <img src={inverter} width="70rem" height="70rem" alt="cctv-icon" /> Inverter</span>
                <span> <img src={ups} width="70rem" height="70rem" alt="cctv-icon" /> UPS</span>
            </div>
       </>
    )
}
