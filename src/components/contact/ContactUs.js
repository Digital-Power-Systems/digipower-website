import React from 'react'
import contact from '../../assets/SVGs/contact_us.svg';
import mail from '../../assets/SVGs/email.svg'
import phone from '../../assets/SVGs/phone.svg'

import './ContactUs.css';

export default function ContactUs() {
    return (
        <div className="contact">
           
           <div className="contact-image"> 
                <div className="contact-text">
                    <h1>Get in touch with us....</h1>
                    <span><h2>Hey, We would love to hear from you !<br /> Shoot us a mail or reach us at +91 - 9605555685 for any queries.</h2></span>
                </div> 
            </div>
           
                <div className="contact-text-mobile">
                    <h1>Get in touch with us....</h1>
                    <span><h2>Hey, We would love to hear from you !<br /> Shoot us a mail or reach us at +91 - 9605555685 for any queries.</h2></span>
                    <img className="contact-image-mobile" src={contact} />
                </div> 
            
            <div className="contact-form">
               <form  onSubmit={console.log("Submitted!!")}>
                    
                    <h5>Your name</h5>
                    <input type="text" placeholder="Name" required/>
                    <h5>Your E-Mail</h5>
                    <input type="email" placeholder="Email" required/>
                    <h5>Contact Number (Optional)</h5>
                    <input type="number" placeholder="Contact Number (Optional)" />
                    <h5>Queries or remarks</h5>
                    <textarea class="comment"  placeholder="Ask away"  ></textarea><br />
                    <input type="submit" />
               </form>
            </div>
             
        </div>
    )
}
