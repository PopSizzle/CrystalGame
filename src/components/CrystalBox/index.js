import React from 'react';
import './CrystalBox.css';

const CrystalBox = (props) =>{
  
  return(
        <div key={props.index} className='col-md-6' onClick={props.onClick} value={props.value}>
          {props.crystal} crystal
        </div> 
  )
}

export default CrystalBox;