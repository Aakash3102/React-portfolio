import React from 'react';
import "./MyWork.css";
import download from "../../assets/download.svg";
import { PROJECT } from "../../constants/index.js";

const MyWork = () => {
  return (
    <div id='mywork' className='mywork'>
        <div className='mywork-title'>
            <h1>My latest work</h1>
            <img src={download} alt="Download icon" />
        </div>
        <div className='mywork-container'>
            {PROJECT.map((work) => (
                <a key={work.id} href={work.link} target="_blank" rel="noopener noreferrer">
                    <img src={work.image} alt={work.title} />
                </a>  
            ))}
        </div>
    </div>
  );
}

export default MyWork;
