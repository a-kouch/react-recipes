import React from 'react';
import './Routes.css'

export default function FruitSando() {
    return (<div className="fruitsando">
        <div className='recipe-container'>
        <h1 className='recipe-title'>Furūtsu Sando (Fruit Sandwiches)</h1>
        
        <div className='ingredients-container'>
            <div>
            <h1 className='ingredients-title'>Ingredients</h1>
            <ul className="ingredients-text">
                <li>1/2 cup whipping cream</li>
                <li>1 tablespoon powdered sugar</li>
                <li>1/2 tablespoon vanilla extract</li>
                <li>4 slices of Japanese milk bread</li>
                <li>2 cups fresh fruit such as strawberries, kiwi fruit, mandarins or grapes</li>
            </ul>
            </div>
            <img 
            src='../images/img-1.jpg'
            alt="Fruits Sando image"></img>
        </div>
        <div className='instructions-container'>
        <h1 className='ingredients-title'>Directions</h1>
            <ol class="instructions-text">
                <li>Beat together cream, powdered sugar, and vanilla in a bowl with an electric mixer on medium until stiff peaks form, 3 to 5 minutes.</li>
                <li>Spread 1 side of each bread slice with whipped cream. Arrange fruit pieces in a diagonal row on 2 of the bread slices, working from 1 corner to the opposite corner. Fill in the areas on both sides of the row with remaining fruit pieces, cutting to fit as necessary. Top with remaining bread slices, cream sides down. Tightly wrap sandwiches in plastic wrap (see marker tip below). Chill at least 1 hour or up to 24 hours.</li>
                <li>Remove plastic wrap. With a serrated knife, carefully cut sandwich in half diagonally, slicing through the diagonal fruit row.</li>
            </ol>
            <h4 class="instructions-text">Tip: <em>After wrapping your fruit sandwiches, use a marker to draw a line on the plastic wrap showing which way the diagonal row of fruit goes, so you'll know where to cut.</em></h4>
        </div>
        </div>
    </div>)
}

