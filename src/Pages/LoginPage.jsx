import React from "react";
import { InputComponent } from "../Components/InputComponent";
import { ButtonComp } from "../Components/ButtonComp";
import * as Services from "../Services/LoginServices";



function LoginPage (){
  return(
    <form onSubmit={Services.signIn}>

    <div>
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

    </div>
    </form>

    
    
  )

}
export {LoginPage}