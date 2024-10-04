import React from 'react';
import './About.css';
import theme_pattern from "../../assets/download.svg";
import photos from "../../assets/photos.jpg";

const About = () => {
    return (
        <div id='about' className='about'>
            <div className='about-title'>
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className='about-sections'>

                <div className='about-left'>
                    <img src={photos} alt="" />
                </div>

                <div className='about-right'>
                    <div className='about-para'>
                        <p>
                            I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
                        </p>
                        <p>
                            My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                    </div>
                    <div className='about-skills'>

                        <div className='about-skill'>
                            <p>HTML & CSS</p>
                            <hr style={{width:"70%"}} />
                        </div>

                        <div className='about-skill'>
                            <p>JavaScript</p>
                            <hr style={{width:"50%"}} />
                        </div>

                        <div className='about-skill'>
                            <p>React JS/ Redux Toolkit</p>
                            <hr style={{width:"60%"}} />
                        </div>

                        <div className='about-skill'>
                            <p>Bootstrap</p>
                            <hr style={{width:"40%"}} />
                        </div>

                        <div className='about-skill'>
                            <p>SCSS & Tailwind</p>
                            <hr style={{width:"60%"}} />
                        </div>

                        <div className='about-skill'>
                            <p>Next.JS</p>
                            <hr style={{width:"50%"}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
