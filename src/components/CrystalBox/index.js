import React from 'react';
import './CrystalBox.css';

const CrystalBox = (props) =>{
  
  return(
    <div>
      
        <div key={props.key} className='col-md-6' onClick={props.onClick} value={props.value}>
          {props.crystal} crystal
        </div>
    </div>  
  )
}

export default CrystalBox;