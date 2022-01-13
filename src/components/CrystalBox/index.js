import React from 'react';
import './CrystalBox.css';

const CrystalBox = (props) =>{
  
  let crystals = ['red','blue','green','yellow']

  const randomNum = () =>{
    return Math.ceil(Math.random()*25);
  }

  let randomNums = [];

  for(let i=0; i<crystals.length; i++){
    randomNums.push(randomNum());
  }
  
  return(
    <div>
      {crystals.map((crystal,index) =>(
        <div key={index} className='col-md-6' onClick={props.onClick} value={randomNums[index]}>
          {crystal} crystal
        </div>
      ))}
    </div>  
  )
}

export default CrystalBox;