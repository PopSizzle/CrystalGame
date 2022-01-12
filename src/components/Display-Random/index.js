import React, { useState, useEffect} from 'react';
import './Display.css';

const DisplayRandom = (props) =>{

  return (
    <div>
      <h3>Number to get: {props.score}</h3>
    </div>
  )
}

export default DisplayRandom;