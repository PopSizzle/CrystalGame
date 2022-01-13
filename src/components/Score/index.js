import React from 'react';
import './score.css';

const Score = (props) =>{

  return(
    <div>
      <h1> Your Score:{props.score}</h1>
    </div>
  )

}

export default Score;