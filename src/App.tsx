import React, {useState} from 'react';
import Home from './Home';
import Display from './Display'

import './App.css';

function App() {

  const [number, setNumber] = useState<string>("")

  function handleClick(e: React.MouseEvent<HTMLButtonElement>){
    e.preventDefault()
    setNumber(number.concat(e.currentTarget.name))
   }

   function handleCalculation(){
    try{
      setNumber(eval(number).toString())
    }catch(err){
  setNumber("Error")
    }
    
  }
  
   function handleClear(){
     setNumber("")
   }
  
  return (
    <div className="App">
        <Display text={number} />
        <Home text={number} 
        handleCalculation={handleCalculation}
        handleClear={handleClear}
        handleClick={(event)=>handleClick(event)}/>
   
    </div>
  );
}

export default App;
