import React from 'react';

import exideLogo from '../../assets/SVGs/batteries_logo/exide.svg';
import amaronLogo from '../../assets/SVGs/batteries_logo/amaron.svg';
import livfastLogo from '../../assets/SVGs/batteries_logo/livfast.svg';
import sayokLogo from '../../assets/SVGs/batteries_logo/sayok-1.jpg';
import wareeLogo from '../../assets/SVGs/batteries_logo/waree.jpeg';
import livguardLogo from '../../assets/SVGs/batteries_logo/livguard.svg';
import altronLogo from '../../assets/SVGs/batteries_logo/altron.png';
import microLogo from '../../assets/SVGs/batteries_logo/micro.jpg';
import UTL from '../../assets/SVGs/batteries_logo/UTL.png';

import './About.css';

export default function Partners() {
    return (
        <div>
                 <h1>Our partners</h1>
                 <hr />
                <div className="partner-list">
                    <div><img src={livfastLogo}  className="partner-logo" alt="livfastlogo"/></div>
                    <div><img src={microLogo}  className="partner-logo" alt="amaronlogo"/></div>
                    <div><img src={UTL}  className="partner-logo" alt="rrlogo"/></div>
                    <div><img src={wareeLogo}  className="partner-logo" alt="wareelogo"/></div>
                    <div><img src={livguardLogo}  className="partner-logo" alt="livguardlogo"/></div>
                    <div><img src={sayokLogo}  className="partner-logo" alt="sayoklogo"/></div>
                    <div><img src={altronLogo}  className="partner-logo" alt="amaronlogo"/></div>
                    <div><img src={exideLogo}  className="partner-logo" alt="exidelogo"/></div>  
                    <div><img src={amaronLogo}  className="partner-logo" alt="amaronlogo"/></div>
                </div>
                <hr />
        </div>
    )
}
