import React, {useState, useEffect} from 'react'
import { Link} from 'react-router-dom';
import DigiPowerLogo from  '../../logo.svg'
import  './NavBar.css'



export default function NavBar() {
  const [width, setWidth] = useState(() => window.innerWidth)
  const [isMobile, setisMobile] = useState(() => false);
  const [isToggle, setisToggle] = useState(() => false);  

  useEffect(() => {
    const handleWidth = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWidth)
    console.log("Current window size is",window.innerWidth," px")
    return _ => {
      window.removeEventListener('resize',console.log("Removing the event listner"))}
    
  },[])
  
  return (
      <>
     
        <nav className={`navbar${width<525?"-mobile":""}`}>
           
                <div className="navbar-logo-container">
                  <Link to="/"><img src={DigiPowerLogo}  className="navbar-logo" /></Link>
                </div>
               <div className={`navbar-items${width<525?"-mobile":""}${width<525&&isToggle?"-active":""}`}>
                <ul>
                  <li><Link to="/services">Products</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li> <Link to="/contact">Contact us</Link></li>
                  
                </ul>
               </div>
                {/* Hamberger menu for mobile verion, to toggle menu */}
                <div className={` navbar-mobile-menu${isToggle?"-active":""}`} onClick={() => setisToggle((prevStateisToggle => !prevStateisToggle  ))}> 
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
                </div>
              
          
        </nav>
      </>
    )
}
