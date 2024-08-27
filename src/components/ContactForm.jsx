// ContactForm.js
import React, { useState } from 'react';
import '../styles/Contactform.css';
import Phone from '../assets/img/phone.png';
import Email from '../assets/img/email.png';
import baseURL from '../config/config';


const ContactForm = () => {
    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleContactSubmit = (e) => {
        e.preventDefault();

        // Create a new contact object
        const newContact = {
            name,
            email,
            message,
        };

        // Perform the POST request to your Django API
        fetch(`${baseURL}/api/contact/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newContact),
        })
            .then(response => response.json())
            .then(data => {
                // Update the state with the new contact
                setContacts([...contacts, data]);
            })
            .catch(error => console.error('Error creating contact:', error));

        // Clear the form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div  className='formalignn'>
        <div className=" formcontainer mt-5">
            <div className="row  formrow ">
                <div className=" formcol col-md-6 ">
                   
                    <form  onSubmit={handleContactSubmit}>
                        <div id="letstalk"  className=" mb-3">
                            <label htmlFor="formName" className="formlabel">Name</label>
                            <input type="text" className="formcontrol" id="formName" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3" >
                            <label htmlFor="formEmail" className="formlabel">Email</label>
                            <input type="email" className="formcontrol" id="formEmail" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formMessage" className="formlabel">Message</label>
                            <textarea className="formcontrol2" id="formMessage" rows={4} placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                        </div>
                        <div className="arrow-container">
                          <button className="btn-purple" type='submit' >
                        Submit
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 31 31" fill="none" className='arrow'>
                  <path d="M17.4016 8L24.6932 15.5M24.6932 15.5L17.4016 23M24.6932 15.5L7.19324 15.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeinejoin="round"/>
                </svg>
              </button>
            </div>
                    </form>
                </div>
                <div className="  col-md-6">
                    <div className=" formcol2">
                        <iframe
                            title="Location Map"
                            className="embed-responsive-item"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125307.54184288796!2d76.08375846856013!3d11.04907035431626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cd25a8032d59%3A0xb4f8a4eea88a259!2sThara%20Trading%20Company!5e0!3m2!1sen!2sin!4v1703688603503!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className='address'>
                        <span><img className='' src={Email} alt='img'  />support@thara.co.in</span>
                        <span><img className='' src={Phone} alt='img' />+91 9447025701 ,+91 9447025702</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ContactForm;
