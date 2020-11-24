import React, {useState} from 'react'
import contact from '../../assets/SVGs/contact_us.svg';


import './ContactUs.css';

export default function ContactUs() {
    
    const [userDetails, setUserDetails] = useState(() => {return {name: "", email: "", mob: "", message: ""}})
    const handleChange = (e, select) => {
        switch(select){
            case "name":
                setUserDetails(prevState => ({...prevState, name: e.target.value }))
                console.log("Setting ",select,"to ", e.target.value, "And updating state", userDetails);
                break;
            case "email":
               
                setUserDetails(prevState => ({...prevState, email: e.target.value }))
                console.log("Setting ",select,"to ", e.target.value, "And updating state", userDetails);
                break;
            case "mob":
      
                setUserDetails(prevState => ({...prevState, mob: e.target.value }))
                console.log("Setting ",select,"to ", e.target.value, "And updating state", userDetails);
                break;
            case "message":
               
                setUserDetails(prevState => ({...prevState, message: e.target.value }))
                console.log("Setting ",select,"to ", e.target.value, "And updating state", userDetails);
                break;
            default:
                break;
        }
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("A value was submitted",e.target[0].value);
    }
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
               <form  onSubmit={handleSubmit}>
                    <h4> Send us a mail</h4>
                    <h5>Your name</h5>
                    <input type="text" placeholder="Name" onChange={(e) => handleChange(e, "name")}required/>
                    <h5>Your E-Mail</h5>
                    <input type="email" placeholder="Email" onChange={(e) => handleChange(e, "email")} required/>
                    <h5>Contact Number (Optional)</h5>
                    <input type="number" placeholder="Contact Number (Optional)" onChange={(e) => handleChange(e, "mob")}/>
                    <h5>Queries or remarks</h5>
                    <textarea className="comment"  placeholder="Message"  onChange={(e) => handleChange(e, "message")}></textarea>
                    <hr />
                    <input type="submit" />
               </form>
            </div>
             
        </div>
    )
}
