import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"

function Signup() {
    const navigate = useNavigate();
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [err,seterr]=useState('');

    const handleReg=()=>{
      if(name==='' && password===''){
        seterr('All fields Required.')
      }
      else{
        localStorage.setItem('Rname',name)
        localStorage.setItem('Rpassword',password)
        navigate('/Login')
      }
     
    }
  return (
    <div>
      <h1 style={{textAlign:'center'}}>SignUp</h1>
      <form>
      <label>Name</label><input required type='text' placeholder='Please Enter Name ' onChange={
        (e)=>{
            setName(e.target.value)
        }
      }/>
     <label>Password</label> <input required type='password' placeholder='Please Enter Password' onChange={
        (e)=>{
            setPassword(e.target.value)
        }
      }/>
      <label>Email </label><input type='email' placeholder='Please Enter Email id'/>
      <label>Phone </label><input type='tel' placeholder='Please Enter Name'/>
      <label>Profession</label><select>
        <option>Select</option>
        <option>Software</option>
        <option>Civil</option>
        <option>IT</option>
        <option>Mech</option>
      </select>

      <button to="/login" onClick={handleReg}>Register</button>
     <p style={{color:'red'}}>{err}</p>
      </form>
    </div>
  )
}

export default Signup


