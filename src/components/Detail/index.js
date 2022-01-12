import React from 'react';
import './Detail.css';

const Detail = (props) =>{
    return(
      <div>
        <h3 className = 'title'>Instructions</h3>
        <ul>
          <li>You will be given a random number to start the game.</li>
          <li>There are four crystals in the image below</li>
          <li>By clicking on a crystal, you will add a specific number of points to your total score</li>
          <li>You win the game if your total score matches the random numebr</li>
          <li>You lose the game if your total score exceeds the number</li>
          <li>The value of each crystal is randomized each game, and is hidden until you click on it</li>
        </ul>
      </div>
    )
}

export default Detail;