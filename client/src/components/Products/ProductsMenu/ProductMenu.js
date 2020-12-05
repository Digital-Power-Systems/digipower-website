import React, {useState} from 'react';

import cctv from '../../../assets/SVGs/cctv.svg';
import solar from '../../../assets/SVGs/solar-energy.svg';
import battery from '../../../assets/SVGs/battery.svg';
import inverter from '../../../assets/SVGs/inverter.png';
import ups from '../../../assets/SVGs/UPS-icon.png';

import {useParams} from 'react-router-dom';

import './ProductMenu.css';
import ProductMenuItem from './ProductMenuItem';
export default function ProductMenu(props) {
    const [selected, setSelected] =useState("?selected=inverter");
 
    const menu = [{id: 1, description: "Inverter", URL: "?selected=inverter", img: inverter },
                    {id: 2, description: "Online/Offline UPS", URL: "?selected=ups", img: ups },
                    {id: 3,  description: "Solar products", URL: "?selected=solar", img: solar },
                    {id: 4, description: "Batteries", URL: "?selected=battery", img: battery },
                    {id: 5, description: "Security Cameras", URL: "?selected=cctv", img: cctv }
                ];
             
    return (
        <div className="product-menu-container">
                {menu.map((item) => {
                    return <ProductMenuItem  description={item.description} URL={item.URL} img={item.img} selected={selected === item.URL} onClick={() => {setSelected(item.URL)}} />
                })}
           
               
        </div>
    )
}
