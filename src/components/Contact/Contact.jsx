import React, { useState } from 'react';
import "./Contact.css";
import theme_pattern from "../../assets/download.svg";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Modal from '../Model/Model'; // Import the Modal component

const Contact = () => {
    const [showModal, setShowModal] = useState(false);
    const [formErrors, setFormErrors] = useState({ name: '', email: '', message: '' });

    const validateForm = (formData) => {
        const errors = { name: '', email: '', message: '' };
        if (!formData.get('name')) errors.name = 'Name is required';
        if (!formData.get('email')) errors.email = 'Email is required';
        if (!formData.get('message')) errors.message = 'Message is required';
        return errors;
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const errors = validateForm(formData);
    
        if (Object.values(errors).some(error => error)) {
            setFormErrors(errors);
            return; // Prevent form submission if validation fails
        }

        formData.append("access_key", "7cae63e0-5207-4e9a-b05b-98860f1ed0ee");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());
    
        if (res.success) {
            setShowModal(true); // Show the modal
            event.target.reset();
            setFormErrors({ name: '', email: '', message: '' }); 
        } else {
            alert("There was an error sending your message. Please try again.");
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div id='contact' className='contact'>
            <div className='contact-title'>
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className='contact-section'>
                <div className='contact-left'>
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
                    <div className='contact-details'>
                        <div className='contact-detail'>
                            <IoIosMail /><p> <a href="mailto:aakashkumar46609@gmail.com">aakashkumar46609@gmail.com</a></p>
                        </div>
                        <div className='contact-detail'>
                            <FaPhoneAlt /><p>+91 &nbsp; 9350146609</p>
                        </div>
                        <div className='contact-detail'>
                            <FaLocationDot /><p>Ghaziabad U.P</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    {formErrors.name && <p className='error'>{formErrors.name}</p>}

                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    {formErrors.email && <p className='error'>{formErrors.email}</p>}

                    <label htmlFor="message">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    {formErrors.message && <p className='error'>{formErrors.message}</p>}

                    <button type='submit' className='contact-submit'>
                        Submit now
                    </button>
                </form>
            </div>

            <Modal show={showModal} onClose={closeModal} />
        </div>
    );
};

export default Contact;
