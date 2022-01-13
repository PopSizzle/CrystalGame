import React from 'react';
import './score.css';

const Score = (props) =>{

  const message = props.win ? 'You Win!!!!' : '';

  return(
    <div>
      <h1> Your Score:{props.score}</h1>
      <h1>{message}</h1>
    </div>
  )

}

export default Score;