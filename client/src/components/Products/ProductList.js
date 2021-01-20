
import React, {useState, useEffect} from 'react';



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
import digipowerInverter from '../../assets/Inverter/digipower-inverter.jpg';
import sonyCCTV from '../../assets/CCTV/sony-cctv.jpg';
import outOfStock from '../../assets/SVGs/out_of_stock.svg';

import ProductCard from './ProductCard';
import Button from '../Button';


import './ProductList.css';

export default function ProductList(props) {
   const [products, setProducts] = useState([]);
   

    useEffect(() => {
        console.log("UseEffect RUN!!!");
        fetch(" https://digital-power-systems.github.io/digipower_products.github.io/products.json")
        .then((res) => {return res.json()})
        .then((result) => { setProducts(result.products); console.log(result.products) });
       
    }, []);

    return (
        <>

        <div className="product-list-container">
                {
                    Object.keys(products).map((key) => {
                        if(props.selected.slice(10,)===key){
                            if(products[key].length==0){
                                return <div style={{ "textAlign": "center" , "margin": "auto"}}>
                                            <h3>Sorry, we're currently out of stock for {key.toUpperCase()}</h3>
                                            <Button  action={"redirect"} url={"/contact"} text={"Get in touch"} />
                                            <h5> But no worries, get in touch with us with your requirements, we're already on it.  :)</h5>
                                            <img style={{"width": "60%" }}src={outOfStock} alt="out of stock"/>
                                        </div>
                            }
                            else{
                               return  products[key].map((item) => { return <ProductCard key={item.id} details={item} />})
                            }
                        }
                    })
                }
        </div>
        </>

    )
}
