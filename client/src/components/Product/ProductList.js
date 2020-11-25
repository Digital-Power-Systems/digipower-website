import React from 'react';
import cctv from '../../assets/SVGs/cctv.svg';
import solar from '../../assets/SVGs/solar-energy.svg'
import battery from '../../assets/SVGs/battery.svg'
export default function ProductList() {
    return (
       <>
            <div>
                <h1> Explore our Power Products....</h1>
                <span> <img src={cctv} width="70rem" height="70rem" alt="cctv-icon" /> CCTV Cameras</span>
                <span> <img src={solar} width="70rem" height="70rem" alt="cctv-icon" /> Solar Products</span>
                <span> <img src={battery} width="70rem" height="70rem" alt="cctv-icon" /> Batteries</span>
            </div>
       </>
    )
}
