import React, {useState} from 'react'
import { Link} from 'react-router-dom';
import DigiPowerLogo from  '../logo.svg'
export default function NavBar() {
    return (
      <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/"><img src={DigiPowerLogo} /></Link>
                <Link to="/services">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact us</Link>
            </div>
        </nav>
      </>
    )
}
