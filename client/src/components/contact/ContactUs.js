import React from 'react'
import contact from '../../assets/SVGs/contact_us.svg';


import './ContactUs.css';

export default function ContactUs() {
    return (
        <div className="contact">
           
           <div className="contact-image"> 
                <div className="contact-text">
                    <h1 className="contact-dialogue">Get in touch with us....</h1>
                    <span><h2 >Hey, we would love to hear from you !<br /> Shoot us a mail or reach us at +91 - 9605555685 for any queries.</h2></span>
                </div> 
            </div>
           
                <div className="contact-text-mobile">
                    <h1 className="contact-dialogue">Get in touch with us....</h1>
                    <span><h2>Hey, We would love to hear from you !<br /> Shoot us a mail <br /> Reach us at +91 - 9605555685 for any queries.</h2></span>
                    <img className="contact-image-mobile" src={contact} alt="contact us"/>
                </div> 
            
            <div className="contact-form">
               <form  onSubmit={console.log("Submitted!!")}>
                    <h4> Send us a mail</h4>
                    <h5>Your name</h5>
                    <input type="text" placeholder="Name" required/>
                    <h5>Your E-Mail</h5>
                    <input type="email" placeholder="Email" required/>
                    <h5>Contact Number (Optional)</h5>
                    <input type="number" placeholder="Contact Number (Optional)" />
                    <h5>Queries or remarks</h5>
                    <textarea class="comment"  placeholder="Message"  ></textarea>
                    <hr />
                    <input type="submit" />
               </form>
            </div>
             
        </div>
    )
}
