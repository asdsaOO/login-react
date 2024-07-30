import React from "react";

function InputComponent({type,name,id,placeHolder,text}){
  return(
    <div className="inputComponent">
      <div>
        <label htmlFor={id}>{text}</label>
        <input type={type} name={name} id={id} placeholder={placeHolder} ></input>
      </div>

    </div>
  )
}

export {InputComponent}