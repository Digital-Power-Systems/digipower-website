import React, {useState} from 'react'
import { Link} from 'react-router-dom';
import DigiPowerLogo from  '../../logo.svg'
import  './NavBar.css'
export default function NavBar() {
    return (
      <>
        <nav className="navbar">
           
                <div className="navbar-logo">
                  <Link to="/"><img src={DigiPowerLogo} /></Link>
                </div>
               <div className="navbar-items">
                <ul>
                  <li><Link to="/services">Products</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li> <Link to="/contact">Contact us</Link></li>
                  
                </ul>
               </div>
          
        </nav>
      </>
    )
}
