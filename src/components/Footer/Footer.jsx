import React from 'react'
import "./Footer.css";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='footer'>
            <hr />
            <div className='footer-bottom'>
                <p className='footer-bottom-left'>© 2024 Aakash kumar. All rights reserved.</p>

                <div className='footer-bottom-right'>
                    <p><a href="https://github.com/Aakash3102"><FaGithub/></a></p>
                    <p><a href="https://www.instagram.com/a_akashkumar07/"><FaInstagram/></a></p>
                    <p><a href="https://x.com/KumarAakas8076"><FaSquareTwitter/></a></p>
                    <p><a href="https://www.linkedin.com/in/aakash-kumar-a5229324b/"><FaLinkedin/></a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer