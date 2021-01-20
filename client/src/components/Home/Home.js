import React from 'react'


import './Home.css'


import town from '../../assets/SVGs/town-1.svg'

import exideLogo from '../../assets/SVGs/batteries_logo/exide.svg';
import amaronLogo from '../../assets/SVGs/batteries_logo/amaron.svg';
import livfastLogo from '../../assets/SVGs/batteries_logo/livfast.svg';
import sayokLogo from '../../assets/SVGs/batteries_logo/sayok-1.jpg';
import wareeLogo from '../../assets/SVGs/batteries_logo/waree.jpeg';
import livguardLogo from '../../assets/SVGs/batteries_logo/livguard.svg';
import altronLogo from '../../assets/SVGs/batteries_logo/altron.png';
import microLogo from '../../assets/SVGs/batteries_logo/micro.jpg';
import UTL from '../../assets/SVGs/batteries_logo/UTL.png';

export default function Home() {
    return (
        <>
            <div className="hero-image-container">
                <div className="hero-image">
                    <div className="hero-text">
                        <h1>(Em)Powering homes & enterprises,</h1>
                        <h3>with industry standard power solutions</h3>
                       
                    </div>
                </div>
            </div>
            {/* THe fancy blue ribbon and home icon inbetween */}
            <div className="ribbon-left"> </div>
            <div className="ribbon-right">  <img className="header-icons-right" src={town} alt="home-page-home-icon" /> </div>
            {/* Partner list */}
      
        </>
    )
}
