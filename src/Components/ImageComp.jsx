import React from "react";
import "../Styles/ImageComp.css";


function ImageComp ({image}){
  return (
    <div className="Image-Content">
      <img src={image}  alt="user-image" title="" />


    </div>
  )
}

export {ImageComp}