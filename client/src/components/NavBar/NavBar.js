import React, {useState, useEffect} from 'react'
import { Link} from 'react-router-dom';
import DigiPowerLogo from  '../../logo-dps.svg'
import  './NavBar.css'



export default function NavBar() {

  const [width, setWidth] = useState(() => window.innerWidth)  //to get width of screen, which adds -mobile to className and css is rendered.
  
  const [isToggle, setisToggle] = useState(() => false);  

  const [selected, setSelected] = useState(() => false);

  useEffect(() => {
  
    const handleWidth = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWidth)  // adding an event listner to check for screen resizing
    console.log("Current window size is",window.innerWidth," px");
    

    return _ => {
   
      window.removeEventListener('resize',console.log("Removing the event listner"))}
    
  },[]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
  })
  }, [selected]);
  
  return (
      <>
     
        <nav className={`navbar${width<546?"-mobile":""}`}>
           
                <div className="navbar-logo-container">
                  <Link to="/" onClick={() => setSelected("Home")}><img src={DigiPowerLogo}  className="navbar-logo" /></Link>
                </div>
               <div className={`navbar-items${width<546?"-mobile":""}${width<546&&isToggle?"-active":""}`}>
                <ul>

                  <li onClick={() => {setisToggle((prevStateisToggle => !prevStateisToggle  )); setSelected("products")}}><Link to="/services">Products</Link></li>
                  <li onClick={() => {setisToggle((prevStateisToggle => !prevStateisToggle  )); setSelected("about")}}><Link to="/about">About</Link></li>
                  <li onClick={() => {setisToggle((prevStateisToggle => !prevStateisToggle  )); setSelected("contact")}}> <Link to="/contact">Contact us</Link></li>

                  
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
