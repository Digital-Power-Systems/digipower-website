import React from 'react'
import contact from '../../assets/SVGs/contact_us.svg';
import mail from '../../assets/SVGs/email.svg'
import phone from '../../assets/SVGs/phone.svg'

import './ContactUs.css';

export default function ContactUs() {
    return (
        <div className="contact">
           
           <span className="contact-image"> 
                <span className="contact-text">
                    <h1>Get in touch with us....</h1>
                    <span><h2>Hey, We would love to hear from you !<br /> Shoot us a mail or reach us at +91 - 9605555685 for any queries.</h2></span>
                </span> 
            </span>
            <span>
               <form className="contact-form" onSubmit={console.log("Submitted!!")}>
                    
                    <h5>Your name</h5>
                    <input type="text" placeholder="Name" required/>
                    <h5>Your E-Mail</h5>
                    <input type="text" placeholder="Email" required/>
                    <h5>Contact Number (Optional)</h5>
                    <input type="text" placeholder="Contact Number (Optional)" />
                    <h5>Queries or remarks</h5>
                    <input type="text" placeholder="Queries or remarks" />
                    <input type="submit" />
               </form>
            </span>
             
        </div>
    )
}
