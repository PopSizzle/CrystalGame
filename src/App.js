import React, { useState, useEffect} from 'react';
import './App.css';
import Header from '../src/components/Header';
import Detail from '../src/components/Detail';
import DisplayRandom from '../src/components/Display-Random';
import CrystalBox from '../src/components/CrystalBox';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const [getNum,setNum] = React.useState();

  const randomScore = () =>{
    setNum(Math.ceil(Math.random() * 100));
  }

  React.useEffect(() =>{
    randomScore();
  },[])

  const handleClick = (e) =>{
    console.log(e.target.key);
  }

  return (
  <div className='container'>
    <Header/>
    <Detail/>
    <DisplayRandom score={getNum}/>
    <CrystalBox onClick={handleClick}/>
  </div>
  );
}

export default App;
