import React from 'react'
import "./Hero.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile from "../../assets/photos.jpg";
import resume from "../../assets/AakashKumarResume.pdf"; 

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile} alt="" className='profile' />
            <h1><span>I'm Aakash Kumar,</span> Frontend developer</h1>
            <p>I’m a passionate front-end developer  focused on creating engaging and user-friendly web applications. I want to use my skills to help businesses grow and improve user experiences.
            </p>
            <div className='hero-action'>
                <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>
                    Connect with Me</AnchorLink></div>
                <div className='hero-resume'>
                <a href={resume} target="_blank" rel="noopener noreferrer" className='resume-view'>My Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Hero