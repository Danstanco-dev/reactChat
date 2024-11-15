/* import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'
import Messager from './pages/Messager'
import Login from './pages/Login'
import Register from './pages/Register'


const App = () => {
  return (
    <>
      <BrowserRouter>
         <Routes>
           <Route path='/' element={<Messager />}/>
           <Route path='/login' element={<Login />}/>
           <Route path='/register' element={<Register />}/>
           <Route path='*' element={<Navigate to="/" replace />} />
         </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App */



// This is the first layer out in creating a chat application where the structure of the UI is build on this module, this module has an Api of react's Router-dom which let's in the page in dynamic rotation among scripts of the application In this section we are to apply these dev  packages: react-router-dom, react-lazy-loading

import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.scss"

const Messager = lazy(() => import("../src/pages/Messager"))
const Login = lazy(() => import("../src/pages/Login"))
const Register = lazy(() => import("../src/pages/Register"))


const App = () => {

  return (
    <>
    <div className="app" >
      
      <Suspense fallback="Fetching Page..." id="suspense">
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Messager />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
       </Routes>
      </BrowserRouter>
      </Suspense> 
      </div> 
      
    </>
  )
}

export default App