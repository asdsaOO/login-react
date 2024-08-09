import React from "react";
import "../Styles/ButtonComp.css"
import { useState } from "react";

function ButtonComp({type,text, onclick}){
  const [loadIndicator,setInd] = useState(false);


  return (
    <div>
      <button type={type} onClick={async()=>{
        if(onclick){
          await onclick();
        }else{
          console.log("no se asigno un onclick");
        }
        setInd(false);
      }}>
        <div className="button-content">
        {loadIndicator?(<img src="./spinner.svg"></img>):text}
        
        </div>
      </button>
    </div>
  )
}


export {ButtonComp}