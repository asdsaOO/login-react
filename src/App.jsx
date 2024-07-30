import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { routerAPP } from './Routes/Routes'
import { Route, RouterProvider } from 'react-router-dom'
import './App.css'

function App() {
  return(
    <RouterProvider router={routerAPP}/>
  ) 
  
}
export default App
