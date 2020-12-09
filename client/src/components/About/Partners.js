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
                    <div><a href="https://www.livfast.in/About/" target="_blank" rel="noopener noreferrer"><img src={livfastLogo}  className="partner-logo" alt="livfastlogo"/></a></div>
                    <div><a href="https://www.rrmicrobatteries.com/" target="_blank"><img src={microLogo}  className="partner-logo" alt="micrologo"/></a></div>
                    <div><a href="https://www.upsinverter.com/" target="_blank"><img src={UTL}  className="partner-logo" alt="UTLlogo"/></a></div>
                    <div><a href="https://www.waaree.com/" target="_blank"><img src={wareeLogo}  className="partner-logo" alt="wareelogo"/></a></div>
                    <div><a href="https://www.livguard.com/about.php" target="_blank"><img src={livguardLogo}  className="partner-logo" alt="livguardlogo"/></a></div>
                    <div><a href="http://www.sayokbatteries.com/" target="_blank"><img src={sayokLogo}  className="partner-logo" alt="sayoklogo"/></a></div>
                    <div><a href="http://www.altron.in/" target="_blank"><img src={altronLogo}  className="partner-logo" alt="altronlogo"/></a></div>
                    <div><a href="https://www.exide.com/en" target="_blank"><img src={exideLogo}  className="partner-logo" alt="exidelogo"/></a></div>  
                    <div><a href="https://www.amaron.in/" target="_blank"><img src={amaronLogo}  className="partner-logo" alt="amaronlogo"/></a></div>
                </div>
                <hr />
        </div>
    )
}
