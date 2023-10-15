import { Button } from 'bootstrap';
import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
function Login() {
    const navigate = useNavigate();
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [err,setErr]=useState('')
    const Rname=localStorage.getItem('Rname')
   const  Rpassword=localStorage.getItem('Rpassword')
   const handleName=(e)=>{
    setName(e.target.value)
}
const handlepass=(e)=>{
  setPassword(e.target.value)
}
const handleLogin=()=>{
        if(Rname==name && Rpassword==password){
            navigate("/Api")
        }else{
            setErr('Invalid data')
        }
    }
  return (
    <div >
      <h1>{Rname}</h1>
      <h1>{Rpassword}</h1>
      Name:<input type='text' placeholder='Enter Your Name' onChange={handleName}/>
      Password:<input type='password' placeholder='Enter Password Here' onChange={handlepass}/>
      <button  to='/api' onClick={handleLogin}>Login</button>
      <p style={{color:'red'}}>{err}</p>
    </div>
  )
}
export default Login
