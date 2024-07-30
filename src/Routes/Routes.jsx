 import React from "react";
 import { LoginPage } from "../Pages/LoginPage";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const routerAPP = createBrowserRouter ([
  {
    path:"/",
    element:<LoginPage/>,
  }
])

export {routerAPP}