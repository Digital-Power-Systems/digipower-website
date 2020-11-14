import React, {useState} from 'react'
import { Link} from 'react-router-dom';
export default function NavBar() {
    return (
      <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/">Logo</Link>
                <Link to="/services">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact us</Link>
            </div>
        </nav>
      </>
    )
}
