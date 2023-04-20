import React from 'react';
import './Routes.css'

export default function Oyakodon() {
    return (<div className="oyakodon">
        <div className='recipe-container'>
        <h1 className='recipe-title'>Oyakodon (Japanese Chicken and Egg Rice Bowl)</h1>
        
        <div className='ingredients-container'>
            <div>
            <h1 className='ingredients-title'>Ingredients</h1>
            <ul className="ingredients-text">
                <li>1 tablespoon olive oil</li>
                <li>4 skinless, boneless chicken thigh</li>
                <li>2 cups dashi stock</li>
                <li>1/4 cup soy</li>
                <li>3 tablespoon mirin</li>
                <li>3 tablespoon brown sugar</li>
                <li>4 large eggs</li>
                <li>4 cups hot cooked white rice</li>
            </ul>
            </div>
            <img 
            src='../images/img-2.jpg'
            alt="Oyakodon Image"></img>
        </div>
        <div className='instructions-container'>
        <h1 className='ingredients-title'>Directions</h1>
            <ol class="instructions-text">
            <li>Heat oil in a large skillet over medium heat. Add chicken and cook until beginning to brown, about 5 minutes. Add onion; cook and stir until onion is translucent, about 5 minutes.</li>
                    <li>Pour in stock, then whisk in soy sauce, mirin, and brown sugar; stir until sugar dissolves. Bring to a boil, then lower heat and simmer until slightly reduced, about 10 minutes.</li>
                    <li>Whisk eggs in a bowl until well-beaten, then pour into the hot stock mixture. Cover the skillet, reduce the heat, and steam until egg is cooked, about 5 minutes. Remove from the heat.</li>
                    <li>Divide rice among 4 deep soup bowls and top with equal amounts of the soup mixture.</li>
            </ol>
        </div>
        </div>
    </div>)
}

