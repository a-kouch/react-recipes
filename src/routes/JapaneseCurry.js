import React from 'react';
import './Routes.css'

export default function JapaneseCurry() {
    return (<div className="japanesecurry">
        <div className='recipe-container'>
        <h1 className='recipe-title'>Japanese Style Curry</h1>
        
        <div className='ingredients-container'>
            <div>
            <h1 className='ingredients-title'>Ingredients</h1>
            <ul className="ingredients-text">
                <li>Half box of pre-made curry roux</li>
                <li>400-500g of protein (chicken or beef)</li>
                <li>1.5tbsp oil</li>
                <li>1 whole brown onion</li>
                <li>2 carrots</li>
                <li>2 potatos</li>
                <li>1.5 cups of green beans</li>
            </ul>
            </div>
            <img 
            src='../images/img-4.jpg'
            alt="Japanese Curry image"></img>
        </div>
        <div className='instructions-container'>
        <h1 className='ingredients-title'>Directions</h1>
            <ol class="instructions-text">
                <li>Finely dice brown onion</li>
                <li>Dice protein, carrots and potatoes into evenly sized chunks.</li>
                <li>Add 1.5tbsp of oil to large cooking pot and brown onion until soft and fragrant.</li>
                <li>Once onions are fragrant, add meat and cook until meat is browned on all sides.</li>
                <li>Add potatoes and carrots.</li>
                <li>Fill pot with water until ingredients are just covered. Bring to boil and let it simmer for at least 20 minutes, longer if you want the meat to be tender</li>
                <li>In the last 5 minutes add the curry roux and green beans. Stir until roux is dissolved and mixed in</li>
                <li>Serve with rice!</li>
            </ol>
        </div>
        </div>
    </div>)
}

