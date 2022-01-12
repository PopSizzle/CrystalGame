import React from 'react';
import './CrystalBox.css';

const CrystalBox = (props) =>{
  
  let crystals = ['red','blue','green','yellow']
  
  return(
    <div>
      {crystals.map((crystal,index) =>(
        <div key={index} className='col-md-6' onClick={props.onClick}>
          {crystal} crystal
        </div>
      ))}
    </div>  
  )
}

export default CrystalBox;