import React from "react";

function ButtonComp({type,text, onclick}){

  return (
    <div>
      <button type={type}>{text}</button>
    </div>
  )
}


export {ButtonComp}