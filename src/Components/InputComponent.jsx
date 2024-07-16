import React from "react";

function InputComponent({type,name,id,placeHolder}){
  return(
    <div className="inputComponent">
      <div>
        <input type={type} name={name} id={id} placeholder={placeHolder} ></input>
      </div>

    </div>
  )
}