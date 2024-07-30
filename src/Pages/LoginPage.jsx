import React from "react";
import { InputComponent } from "../Components/InputComponent";
import { ButtonComp } from "../Components/ButtonComp";
import { ImageComp } from "../Components/ImageComp";
import userImage from "../assets/userImage.jpg"
import * as Services from "../Services/LoginServices";
import "../Styles/LoginPage.css"



function LoginPage (){
  return(
    <div className="Login-Content">
    <form onSubmit={Services.signIn}>

    
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
    />

    
    </form>
    </div>

    
    
  )

}
export {LoginPage}