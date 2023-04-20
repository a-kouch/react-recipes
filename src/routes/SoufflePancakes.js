import React from 'react';
import './Routes.css'

export default function SoufflePancakes() {
    return (<div className="soufflepancakes">
        <div className='recipe-container'>
        <h1 className='recipe-title'>Japanese Style Souffle Pancakes</h1>
        
        <div className='ingredients-container'>
            <div>
            <h1 className='ingredients-title'>Ingredients</h1>
            <ul className="ingredients-text">
                <li>2 Eggs</li>
                <li>1/4 cup brown sugar</li>
                <li>2 teaspoons baking powder</li>
                <li>2/3 cup milk</li>
                <li>1/2 teaspoon vanilla extract</li>
            </ul>
            </div>
            <img 
            src='../images/img-3.jpg'
            alt="Souffle Pancake image"></img>
        </div>
        <div className='instructions-container'>
        <h1 className='ingredients-title'>Directions</h1>
            <ol class="instructions-text">
            <li>Beat eggs and sugar together in a bowl using an electric mixer on medium speed until well blended.</li>
                <li>Mix flour and baking powder together in a separate bowl. Slowly mix into the sugar-egg mixture; batter will thicken rather quickly. Slowly add milk. Stir in vanilla extract.</li>
                <li>Heat a lightly oiled griddle over medium-high heat. </li>
                <li>Drop batter by large spoonfuls onto the griddle and cook until bubbles form and the edges are dry, 3 to 4 minutes. </li> 
                <li>Flip and cook until browned on the other side, 2 to 3 minutes. </li>
                <li>Repeat with remaining batter.</li>
            </ol>
        </div>
        </div>
    </div>)
}

