import React from 'react';
import fb from '../../assets/SVGs/facebook.svg';
import insta from '../../assets/SVGs/instagram.svg';
import mail from '../../assets/SVGs/email.svg'
import phone from '../../assets/SVGs/phone.svg'
import location from '../../assets/SVGs/location.svg'
import DigiPowerLogo from  '../../logo.svg';
import  './Footer.css';

import { Link} from 'react-router-dom';

export default function Footer() {
   
    return (
      <>
            <footer>
              
                 <div> <Link to="/"> <h3> <img src={DigiPowerLogo} /></h3></Link></div>
                  <div className="location-column">
                    <picture><img className="location" src={location} /></picture>
                    <span className="location-address">
                            NP/07260<br />
                            Parannur Post<br />
                            Palolithazham<br />
                            Narikkuni<br />
                            Kozhikode - 673585<br />
                            Kerala, India <br />
                    </span>
                  </div>
               
           
                <div>
                    <span><h3><img className="social-media-icons" src={mail} alt="mail" /></h3>
                    <p><strong>manager@digipower.in</strong></p></span>
                   <span> <h3><img className="social-media-icons" src={phone} alt="phone" /></h3>
                    <p><strong>+91 - 9605555685</strong></p></span>
                </div>
                <div>
                    <h3>Follow us</h3>
                   <span><img className="social-media-icons" src={fb} alt="facebook" /></span>
                    <span><img className="social-media-icons" src={insta} alt="instagram" /></span>
                   
                </div>
              
            </footer>
            © Copyright 2020, Digital Power Solutions, All Rights Reserved
            </>
    )
}
