import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="videos/video-1.mp4" autoPlay loop muted />
        <h1>Welcome!</h1>
        <p>Scroll down and click for the recipe!</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' >ABOUT ME</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' >RECIPES</Button>
        </div>
    </div>
  )
}

export default HeroSection