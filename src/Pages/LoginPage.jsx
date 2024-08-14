import React from "react";
import { InputComponent } from "../Components/InputComponent";
import { ButtonComp } from "../Components/ButtonComp";
import { ImageComp } from "../Components/ImageComp";
import userImage from "../assets/userImage.jpg"
import * as Services from "../Services/LoginServices";
import "../Styles/LoginPage.css"
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";



  function LoginPage (){
    const [sendStatus,setSendStatus] = useState(false);
    const navigate = useNavigate();

    const sendLoginData=(e)=>{
      setSendStatus(true);
      Services.signIn(e)
      .then((resolve)=>{
        console.log(resolve);
        setSendStatus(false);
        navigate("/Home");

      })
      .catch((error)=>{
        console.log("ERROR DESCONOCIDO");
      })
    }


    return(
      <div className="Login-Content">
      <form onSubmit={sendLoginData}>
      <ImageComp
        image={userImage}
      />
      <InputComponent
        text="Correo Electronico: "
        name="correo-inp"
        id="correo-inp"
        type="email"
        placeHolder="Ingrese el correo electronico"
      />
      <InputComponent
        text="Password: "
        name="password-inp"
        id="password-inp"
        type="password"
        placeHolder="Ingrese su Contraseña"
      />
      <ButtonComp
        type="submit"
        text="Ingresar"
        loadStatus={sendStatus}
      />    
      </form>
      </div>
    )
  }


  export {LoginPage}