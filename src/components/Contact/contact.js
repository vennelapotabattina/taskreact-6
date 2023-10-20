import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact =()=>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_rfgs07d', 'template_t3r440k', form.current, 'Ik8EIoyF1uZbOyFeY')
           .then((result) => {
              console.log(result.text);
           }, (error) => {
              console.log(error.text);
           });
      };
    return(
        <section id = "cts" className='contactPage'>
        <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc"> please fill out the below form to discuss any work oppurtunities</span>
        <form className='contactForm' ref ={form} onSubmit = {sendEmail} >
            <input type ="text" className= "name" placeholder='Your Name' name ='your_name' />
            <input type ="email" className= "email" placeholder='Your email' name='your_email'/>
            <textarea className='msg' name = "message" rows="5" placeholder='Your Message'></textarea>
            <button type = 'submit' value ='Send' className='submitBtn'>Submit</button>
            <div className="links">
                <img src ={FacebookIcon} alt = "Facebook" className="link" />
                <img src ={TwitterIcon} alt = "Twitter" className="link" />
                <img src ={YouTubeIcon} alt = "Youtube" className="link" />
                <img src ={InstagramIcon} alt = "Instagram" className="link" />

            </div>
        </form>
        </div>
        </section>
    );
}

export default Contact;