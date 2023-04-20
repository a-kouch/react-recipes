import React from 'react';
import './Routes.css';

function About() {
    return ( <div className='about'>
        <div className='main-container'>
            <div className='title-container'>
                <h1>Hi, I'm Anthony!</h1>
            </div>
            <div className='text-container'>
                <p>My name is Anthony and I am a home cook who developed a passion for cooking while working in a Japanese fine dining restaurant and during COVID lockdowns!
                
                </p>
                <p> While my favourite cuisine is Japanese, I have delved into many other cuisines and cooking styles as I like to cook for both myself and my partner.
                </p> 
                <p>
                In my pursuit into a programming career, I created this website as a place to host my recipes for both easy access for me and my partner.
                </p>
                <p>
                As of April 2023 this was also a 6 month checkpoint to look back and reflect on how much I have progressed in my self-taught programming journey as I built
                my first website 6 months ago using only basic HTML and CSS. 
                </p>
            </div>
        </div>
    </div> );
}

export default About;

