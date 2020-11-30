import React from 'react';

import exide from '../../assets/Battery/exide-banner.jpg'
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
                <ProductCard img={inverter} header="Inverters" description="Keep the power going with world-class inverters."/>
                <ProductCard img={ups} header="UPS" description="Keep the power going with world-class UPS"/>
                <ProductCard img={solar} header="Solar products" description="Harness the power of the sun to power your homes, protect  nature and keep the bills light.  "/>
                <ProductCard img={battery} header="Batteries" description="The best batteries around for all your needs"/>
                <ProductCard img={cctv} header="Surveilence cameras" description="Level up the security with  watchful eyes around."/>
              
              
            </div>
       </>
    )
}
