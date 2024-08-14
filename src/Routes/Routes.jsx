 import React from "react";
 import { LoginPage } from "../Pages/LoginPage";
 import {HomePage} from "../Pages/HomePage";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const routerAPP = createBrowserRouter ([
  {
    path:"/",
    element:<LoginPage/>,
  },
  {
    path:"/Home",
    element:<HomePage/>

  }
  
])

export {routerAPP}