import React from 'react';

import exideBanner from '../../assets/Battery/exide-banner.jpg';
import amaronBanner from '../../assets/Battery/amaron-banner.png';
import livfastbanner from '../../assets/Battery/livfast-banner.png';
import sayokBanner from '../../assets/Battery/sayok-banner.jpg';
import livguardbanner from '../../assets/Battery/livguard-banner.jpg';

import './About.css';
export default function About() {
    return (
        <>
            <div className="about-container">
                At Digi Power, we are focused on bringing value to the table and provide the best energy solutions you.
                Provided by well-known manufacturers with global presence and brands to match. 
                
                {/* <img  src={exideBanner} alt="contact us"/>
                <img  src={livfastbanner} alt="contact us"/>
                <img  src={livguardbanner} alt="contact us"/>
                <img  src={amaronBanner} alt="contact us"/>
                <img  src={sayokBanner} alt="contact us"/> */}
            </div>
       </>
    )
}
