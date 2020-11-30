import React from 'react';

import DigiPowerLogo from  '../../logo.svg';

import exideLogo from '../../assets/SVGs/batteries_logo/exide.svg';
import amaronLogo from '../../assets/SVGs/batteries_logo/amaron.svg';
import livfastLogo from '../../assets/SVGs/batteries_logo/livfast.svg';
import sayokLogo from '../../assets/SVGs/batteries_logo/sayok-1.jpg';
import rrLogo from '../../assets/SVGs/batteries_logo/rrmicro.jpg';
import wareeLogo from '../../assets/SVGs/batteries_logo/waree.jpeg';
import livguardLogo from '../../assets/SVGs/batteries_logo/livguard.svg'

// import exideBanner from '../../assets/Battery/exide-banner.jpg';
// import amaronBanner from '../../assets/Battery/amaron-banner.png';
// import livfastbanner from '../../assets/Battery/livfast-banner.png';
// import sayokBanner from '../../assets/Battery/sayok-banner.jpg';
// import livguardbanner from '../../assets/Battery/livguard-banner.jpg';


import './About.css';
export default function About() {
    return (
        <>
            <div className="about-container">
                <div className="intro-list">
                    <h1>Our mission</h1>
                    <span>  Digi Power operates with mission to bring quality power solutions to customers at affordable prices.</span>
                    <div className="mission-list">
                        <div className="mission-card">Industry standard products</div>
                        <div className="mission-card"> Dealerships with industry leader brands.</div>
                        <div className="mission-card"> Operations in Kerala </div>
                        <div className="mission-card"> Fair prices and top-notch service</div>
                    </div>
              
                </div>
                    <hr />
                    <h1>Our partners</h1>
                <div className="partner-list">
                    <div><img src={exideLogo}  className="partner-logo" alt="exidelogo"/></div>  
                    <div><img src={amaronLogo}  className="partner-logo" alt="amaronlogo"/></div>
                    <div><img src={livfastLogo}  className="partner-logo" alt="livfastlogo"/></div>
                    <div><img src={livguardLogo}  className="partner-logo" alt="livguardlogo"/></div>
                    <div><img src={sayokLogo}  className="partner-logo" alt="sayoklogo"/></div>
                    <div><img src={wareeLogo}  className="partner-logo" alt="wareelogo"/></div>
                    <div><img src={rrLogo}  className="partner-logo" alt="rrlogo"/></div>
                </div>
                <hr />
                <h1>Our branches</h1>
               
                <div className="branch-list">
                   
                    <div className="branch-address">
                        <span >
                            <strong>Corporate Office</strong><hr />
                            Digital Power Systems<br />
                            2nd Floor, United Complex<br />
                            Behind Nandilath G Mart<br />
                            I G Road<br />
                            Kozhikode<br/>
                            673001<br />
                            Kerala, India <br />
                        </span> 
                    </div>  
                    <div className="branch-address">
                        <span >
                            <strong>Branch 1</strong><hr />
                            Digital Power Systems<br />
                            NP/07260<br />
                            Parannur Post<br />
                            Palolithazham,  Narikkuni<br />
                            Kozhikode<br/>
                            673585<br />
                            Kerala, India <br />
                        </span> 
                    </div>  
                    <div className="branch-address">
                        <span >
                            <strong>Branch 2</strong><hr />
                            Power Tech Energy Solutions<br />
                            2nd Floor, United Complex<br />
                            Behind Nandilath G Mart<br />
                            I G Road<br />
                            Kozhikode<br/>
                            673001<br />
                            Kerala, India <br />
                        </span> 
                    </div> 
                    <div className="branch-address">
                        <span >
                            <strong>Branch 3</strong><hr />
                            Invex Power Systems<br />
                            Cheekkilod, <br />
                            Kozhikode<br/>
                            673613<br />
                            Kerala, India <br />
                        </span> 
                    </div> 
                    <div className="branch-address">
                        <span >
                            <strong>Branch 4</strong><hr />
                            To add @ Kasargod<br />
                            Kasargod<br/>
                            Kerala, India <br />
                        </span> 
                    </div> 
                </div>
            </div>
       </>
    )
}
