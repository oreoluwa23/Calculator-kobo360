import React, {FC} from "react";
import './App.css';


interface Props{
    text: string
}


const Display: FC<Props> = ({text})=>{
return(
    <div className="display">
        <input type="text" value={text}/>
    </div>
)
}

export default Display;