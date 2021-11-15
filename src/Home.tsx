import React, {FC} from "react";
import './App.css';


interface Props{
   text: string;
   handleClick: (e: React.MouseEvent<HTMLButtonElement>)=> void
   handleClear: ()=> void
   handleCalculation: ()=> void 
}
const Home : FC<Props> = ({handleCalculation, handleClear, handleClick})=>{
    return (
        <div className="App">
 <div className="row-4">
        <button name="1"  onClick={(event)=>handleClick(event)}>1</button>
        <button name="2" onClick={(event)=>handleClick(event)}>2</button>
        <button name="3" onClick={(event)=>handleClick(event)}>3</button>
        <button className="operator" name="+" onClick={(event)=>handleClick(event)}>+</button>
     </div>

     <div className="row-3">
        <button name="4"  onClick={(event)=>handleClick(event)}>4</button>
        <button name="5"  onClick={(event)=>handleClick(event)}>5</button>
        <button name="6"  onClick={(event)=>handleClick(event)}>6</button>
        <button className="operator" name="-" onClick={(event)=>handleClick(event)}>-</button>
     </div>

     <div className="row-2">
        <button name="7"  onClick={(event)=>handleClick(event)}>7</button>
        <button name="8"  onClick={(event)=>handleClick(event)}>8</button>
        <button name="9"  onClick={(event)=>handleClick(event)}>9</button>
        <button className="operator" name="*" onClick={(event)=>handleClick(event)}>*</button>
     </div>
     
     <div className="row-1"> 
     <button onClick={handleClear}>AC</button>
     <button name="/" onClick={(event)=>handleClick(event)}>+-/</button>
     <button name="%" onClick={(event)=>handleClick(event)}>%</button>
     <button className="operator" name="/" onClick={(event)=>handleClick(event)}>/</button>
     
    
     </div>


     <div className="row-zero">
       <button className="zero" name="0" onClick={(event)=>handleClick(event)}>0</button>
       <button className="under-zero" name="." onClick={(event)=>handleClick(event)}>.</button>
       <button className="under-zero-1" onClick={handleCalculation}>=</button>
     </div>
        </div>
    )
}
export default Home;