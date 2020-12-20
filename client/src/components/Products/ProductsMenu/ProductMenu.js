
import React, {useEffect} from 'react';


import cctv from '../../../assets/SVGs/cctv.svg';
import solar from '../../../assets/SVGs/solar-energy.svg';
import battery from '../../../assets/SVGs/battery.svg';
import inverter from '../../../assets/SVGs/inverter.png';
import ups from '../../../assets/SVGs/UPS-icon.png';

import {useParams} from 'react-router-dom';

import './ProductMenu.css';
import ProductMenuItem from './ProductMenuItem';
export default function ProductMenu(props) {

    useEffect(() => {
        window.scroll({
            top: 125, 
            left: 0, 
            behavior: 'smooth'
          });
        
    }, [props.selected]); 
    // Scroll to position (Top)  on selectiong new element
    const menu = [{id: 1, description: "Inverters", URL: "?selected=inverter", img: inverter },
                    {id: 2, description: "Online UPS", URL: "?selected=onlineups", img: ups },
                    {id: 3, description: "Home UPS", URL: "?selected=ups", img: ups },
                    {id: 4,  description: "Solar", URL: "?selected=solar", img: solar },
                    {id: 5, description: "Batteries \n", URL: "?selected=battery", img: battery },
                    {id: 6, description: "CCTV ", URL: "?selected=cctv", img: cctv }

                ];
             
    return (
        <div className="product-menu-container">
                {menu.map((item) => {

                    return <><ProductMenuItem  key={item.id} description={item.description} URL={item.URL} img={item.img} selected={props.selected === item.URL} onClick={() => {props.setSelected(item.URL)}} /></>

                })}
           
               
        </div>
    )
}
