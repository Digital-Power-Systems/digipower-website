import React from 'react';

import exide from '../../assets/Battery/exide-banner.jpg'
import cctv from '../../assets/SVGs/cctv.svg';
import solar from '../../assets/SVGs/solar-energy.svg'
import battery from '../../assets/SVGs/battery.svg'
import inverter from '../../assets/SVGs/inverter.png'
import ups from '../../assets/SVGs/UPS-icon.png'

import './ProductOverviewList.css';
import ProductOverviewCard from './ProductOverviewCard';


export default function ProductOverviewList() {
    return (
       <>
                <h1> Our Power Products</h1>
            <div className="product-overview-list-container">
                <ProductOverviewCard img={inverter} header="Inverters" description="Keep the power going with world-class inverters." URL="/services?selected=inverter"/>
                <ProductOverviewCard img={ups} header="Online/Offline UPS" description="Keep the power going with world-class UPS" URL="/services?selected=ups"/>
                <ProductOverviewCard img={solar} header="Solar products" description="Harness the power of the sun to power your homes, protect  nature and keep the bills light." URL="/services?selected=solar"/>
                <ProductOverviewCard img={battery} header="Batteries" description="The best batteries around for all your needs" URL="/services?selected=battery"/>
                <ProductOverviewCard img={cctv} header="Surveilence cameras" description="Level up the security with  watchful eyes around." URL="/services?selected=cctv"/>
              
              
            </div>
       </>
    )
}
