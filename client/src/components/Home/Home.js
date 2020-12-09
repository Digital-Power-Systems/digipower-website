import React from 'react'


import './Home.css'

import home from '../../assets/SVGs/home-1.svg'
import town from '../../assets/SVGs/town-1.svg'

export default function Home() {
    return (
       <>
            <div className="hero-image-container">
                <div className="hero-image">
                    <div className="hero-text">
                        <h1>Powering homes and enterprises</h1>
                        <h3>with industry standard power solutions</h3>
                    </div>
                </div>
            </div>
                        <div className="header-icons-container"> <img className="header-icons-right"src={town} alt="contact us"/></div>
           
       </>
    )
}
