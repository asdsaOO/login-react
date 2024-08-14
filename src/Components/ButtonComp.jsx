import React from "react";
import "../Styles/ButtonComp.css"
import { useState, useEffect } from "react";

function ButtonComp({type,text,onclick,loadStatus}){
  const [loadIndicator,setInd] = useState(loadStatus);
  useEffect(()=>{
    setInd(loadStatus);

  },[loadStatus])
  
  return (
    <div>
      <button type={type} onClick={async()=>{
        if(onclick){
          await onclick();
        }else{
          console.log("el valor es "+loadIndicator);
        }
      }}>
        <div className="button-content">
        {loadIndicator?(<img src="./spinner.svg"></img>):text}
        
        </div>
      </button>
    </div>
  )
}


export {ButtonComp}