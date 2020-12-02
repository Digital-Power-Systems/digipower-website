import React from 'react';

import cctv from '../../../assets/SVGs/cctv.svg';
import solar from '../../../assets/SVGs/solar-energy.svg';
import battery from '../../../assets/SVGs/battery.svg';
import inverter from '../../../assets/SVGs/inverter.png';
import ups from '../../../assets/SVGs/UPS-icon.png';

import {Link} from 'react-router-dom';

import './ProductMenu.css';
export default function ProductMenu() {
    return (
        <div className="product-menu-container">
            <Link to="/services?selected=inverter">
                <div className="product-image-container"><img className="product-image" src={inverter} alt="inverter-icon" />Inverters</div>
            </Link>
            <Link to="/services?selected=ups">
                <div className="product-image-container"><img className="product-image" src={ups} alt="ups-icon" />Online/Offline UPS</div>
            </Link>
            <Link to="/services?selected=solar">
                <div className="product-image-container"><img className="product-image" src={solar} alt="solar-icon" />Solar products</div>
            </Link>
            <Link to="/services?selected=battery">
                <div className="product-image-container"><img className="product-image" src={battery} alt="battery-icon" />Batteries</div>
            </Link>
            <Link to="/services?selected=cctv">
                <div className="product-image-container"><img className="product-image" src={cctv} alt="cctv-icon" />Security Cameras</div>
            </Link>
        </div>
    )
}
