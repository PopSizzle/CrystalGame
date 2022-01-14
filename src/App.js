import React, { useState, useEffect} from 'react';
import './App.css';
import Header from '../src/components/Header';
import Detail from '../src/components/Detail';
import DisplayRandom from '../src/components/Display-Random';
import CrystalBox from '../src/components/CrystalBox';
import Score from '../src/components/Score';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const [getNum,setNum] = React.useState();
  const [getScore,setScore] = React.useState(0);
  const [randomNums, setRandomNums] = React.useState([]);

  React.useEffect(() =>{

    let nums = [];

    for(let i=0; i<4; i++){
      nums.push(Math.ceil(Math.random()*25));
    }

    setRandomNums(nums);

    setNum(Math.ceil(Math.random() * 100) + 100);
  },[])

  let displayScore = getScore

  const handleClick = (e) =>{
    let value = parseInt(e.target.getAttribute('value'));
    setScore(getScore + value);
    displayScore =  getScore;
    console.log(value);
  }

  let crystals = ['red','blue','green','yellow'];

  return (
  <div className='container'>
    <Header/>
    <Detail/>
    <DisplayRandom score={getNum}/>
    <Score score={displayScore} win={getNum===getScore} lose={getNum>getScore}/>
    {crystals.map((crystal,index) =>(
        <CrystalBox key={index} index={index} onClick={handleClick} value={randomNums[index]} crystal={crystal}/>
    ))}
  </div>
  );
}

export default App;
