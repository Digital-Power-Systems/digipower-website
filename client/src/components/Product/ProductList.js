import React from 'react';

import cctv from '../../assets/SVGs/cctv.svg';
import solar from '../../assets/SVGs/solar-energy.svg'
import battery from '../../assets/SVGs/battery.svg'
import inverter from '../../assets/SVGs/inverter.png'
import ups from '../../assets/SVGs/UPS-icon.png'

import './ProductList.css';
import ProductCard from './ProductCard';

export default function ProductList() {
    return (
       <>
                <h1> Our Power Products</h1>
            <div className="product-list-container">
                <ProductCard img={cctv} header="CCTV" description="Level up the security with  watchful eyes around."/>
                <ProductCard img={solar} header="Solar products" description="Harness the power of the sun. Power your home "/>
                <ProductCard img={battery} header="Batteries" description="The best batteries around for al your needs"/>
                <ProductCard img={inverter} header="Inverters" description="Keep the power going with world-class inverters."/>
                <ProductCard img={ups} header="UPS" description="Keep the power going with world-class UPS"/>
                {/* <span> <img src={cctv}  alt="cctv-icon" /> CCTV</span>
                <span> <img src={solar} width="70rem" height="70rem" alt="cctv-icon" /> Solar Products</span>
                <span> <img src={battery} width="70rem" height="70rem" alt="cctv-icon" /> Batteries</span>
                <span> <img src={inverter} width="70rem" height="70rem" alt="cctv-icon" /> Inverter</span>
                <span> <img src={ups} width="70rem" height="70rem" alt="cctv-icon" /> UPS</span> */}
            </div>
       </>
    )
}
