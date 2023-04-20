import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="videos/video-1.mp4" autoPlay loop muted />
        <h1>Welcome!</h1>
        <p>Scroll down and click for the recipe!</p>
        <div className="hero-btns">
            <Link to="/about">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' >ABOUT ME</Button>
            </Link>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' >RECIPES</Button>
        </div>
    </div>
  )
}

export default HeroSection