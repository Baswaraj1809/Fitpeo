import React from 'react'
import Login from './Login'
import Signup from './Signup'
import Api from './Api'
import { Route, Routes } from 'react-router-dom'

function Routings() {
  return (
    <div>
      
      <Routes>
        <Route path="/"  element={<Signup />}/>
        <Route path="/login"  element={<Login />}/>
        <Route path="/api"  element={<Api />}/>
      </Routes>
    </div>
  )
}

export default Routings


