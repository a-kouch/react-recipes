import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import { Link } from 'react-router-dom';

function Cards() {
    return (
      <div className="cards">
          <h1>Click for the recipe!</h1>
          <div className="cards-container">
              <div className="cards-wrapper">
                  <ul className="cards-items">
                      <CardItem 
                      src="images/img-1.jpg"
                      text="Fruit Sando"
                      label="See More"
                      path='/fruitsando'
                      />
                      <CardItem 
                      src="images/img-2.jpg"
                      text="Oyakodon"
                      label="See More"
                      path='/Oyakodon'
                      />
                  </ul>
                  <ul className="cards-items">
                      <CardItem 
                      src="images/img-3.jpg"
                      text="Japanese Souffle Pancakes"
                      label="See More"
                      path='/soufflepancakes'
                      />
                      <CardItem 
                      src="images/img-4.jpg"
                      text="Japanese Curry"
                      label="See More"
                      path='/japanesecurry'
                      />
                  </ul>
              </div>
          </div>
      </div>
    )
  }
  
  export default Cards;
