import React, {useState} from 'react';

import cctv from '../../../assets/SVGs/cctv.svg';
import solar from '../../../assets/SVGs/solar-energy.svg';
import battery from '../../../assets/SVGs/battery.svg';
import inverter from '../../../assets/SVGs/inverter.png';
import ups from '../../../assets/SVGs/UPS-icon.png';

import {Link} from 'react-router-dom';

import './ProductMenu.css';
import ProductMenuItem from './ProductMenuItem';
export default function ProductMenu() {
    return (
        <div className="product-menu-container">
            
               <ProductMenuItem description="Inverter" URL="/services?selected=inverter" img={inverter} selected={true}/>
               <ProductMenuItem description="Online/Offline UPS" URL="/services?selected=ups" img={ups} selected={true}/>
               <ProductMenuItem description="Solar products" URL="/services?selected=solar" img={solar} selected={true}/>
               <ProductMenuItem description="Batteries" URL="/services?selected=battery" img={battery} selected={true}/>
               <ProductMenuItem description="Security Cameras" URL="/services?selected=cctv" img={cctv} selected={true}/>
        </div>
    )
}
