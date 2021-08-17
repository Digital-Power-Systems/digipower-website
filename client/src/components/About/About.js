import React from 'react';

import DigiPowerLogo from  '../../logo.svg';



// import exideBanner from '../../assets/Battery/exide-banner.jpg';
// import amaronBanner from '../../assets/Battery/amaron-banner.png';
// import livfastbanner from '../../assets/Battery/livfast-banner.png';
// import sayokBanner from '../../assets/Battery/sayok-banner.jpg';
// import livguardbanner from '../../assets/Battery/livguard-banner.jpg';


import './About.css';
import Partners from './Partners';
export default function About() {
    return (
        <>
            <div className="about-container">
                <div className="intro-list">
                    <h1>Our mission</h1>
                    <span>  Digital Power Systems operates with mission to bring quality power solutions to customers at affordable prices.</span>
                    <div className="mission-list">
                        <div className="mission-card">Industry standard products</div>
                        <div className="mission-card"> Dealerships with industry leader brands.</div>
                        <div className="mission-card"> Operations in Kerala </div>

                        <div className="mission-card"> Fair prices </div>
                        <div className="mission-card">Top-notch service</div>

                    </div>
              
                </div>
                    <hr />

              

               
                <h1>Our Branches</h1>
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
                    {/* <div className="branch-address">
                        <span >
                            <strong>Branch 4</strong><hr />
                            To add @ Kasargod<br />
                            Kasargod<br/>
                            Kerala, India <br />
                        </span> 
                    </div>  */}
                </div>

                <Partners />

            </div>
       </>
    )
}
