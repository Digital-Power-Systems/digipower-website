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
                <div> <Link to="/"> <img  className="logo" src={DigiPowerLogo} /></Link></div>
             
                <div className="contact-column">
                    <div>
                        <img className="contact-icons" src={mail} alt="mail" />
                        <strong>manager@digipower.in</strong>
                       </div>
                       <div>
                        <img className="contact-icons" src={phone} alt="phone" />
                        <strong>+ 91-960 515 5666 (IN)</strong>
                    </div>
                </div>
                <div>
                    <h3>Follow us</h3>
                   <span><img className="social-media-icons" src={fb} alt="facebook" /></span>
                    <span><img className="social-media-icons" src={insta} alt="instagram" /></span>
                   
                </div>
                <div className="location-column">
                    <picture><img className="location-map" src={location} /></picture>
                       <div className="location-address">
                            <span >
                                    <strong>Corporate Office: </strong><br />
                                    Digital Power Systems<br />
                                    2nd Floor, United Complex<br />
                                    Behind Nandilath G Mart<br />
                                    I G Road<br />
                                    Kozhikode<br/>
                                    673001<br />
                                    Kerala, India <br />
                            </span>  
                       </div>
                       <div className="location-address">
                            <span >
                                <span></span><strong>Branch 1 : </strong><br />
                                Digital Power Systems<br />
                                NP/07260<br />
                                Parannur Post<br />
                                Palolithazham,  Narikkuni<br />
                                Kozhikode<br/>
                                673585<br />
                                Kerala, India <br />
                            </span> 
                        </div>  
                        <div className="location-address">
                            <span >
                                <strong>Branch 2 </strong><br />
                                Power Tech Energy Solutions<br />
                                2nd Floor, United Complex<br />
                                Behind Nandilath G Mart<br />
                                I G Road<br />
                                Kozhikode<br/>
                                673001<br />
                                Kerala, India <br />
                            </span> 
                        </div> 
                        <div className="location-address">
                            <span >
                                <strong>Branch 3 </strong><br />
                                Invex Inverter<br />
                                Cheekkilod<br />
                                Kozhikode<br/>
                                673613<br />
                                Kerala, India <br />
                            </span> 
                        </div> 
                        <div className="location-address">
                            <span >
                                <strong>Branch 4 </strong><br />
                                To add @ Kasargod<br />
                                Cheekkilod<br />
                                Kasargod<br/>
                                Kerala, India <br />
                            </span> 
                        </div> 
                </div>
               <div>
               © Copyright 2020, Digital Power Solutions, All Rights Reserved
               </div>
            </footer>
           
            </>
    )
}
