import React, { useRef, useState } from 'react'

function Formvalidation() {
    const email=useRef('');
    const password=useRef('');
    const [err,setErr]=useState('');
    const [perr,setPerr]=useState('');
    const [submit,setSubmit]=useState('');

    const handleInput=(e)=>{
        console.log(e)
        if(e.target.name==='email'){
            if(!e.target.value.includes('@')){
                setErr("Enter a valid email id")
            }else{
                setErr('')
            }
        }
        if(e.target.name==='password'){
            if(e.target.value.length<=3){
                setPerr('password should be  atleast 8 characters. ')
            }else{
                setPerr('')
            }
        }
    }
    
    const handleSubmit=()=>{
        setSubmit('Login Successful.')
    }
  return (
    <div>
      Email<input type='email' name='email' placeholder='please enter email' onChange={handleInput} ref={email}/>
      <p>{err}</p>
      Password<input type='password' name='password' placeholder='please enter password' onChange={handleInput} ref={password}/>
      <p>{perr}</p>
      <button onClick={handleSubmit}>Submit</button>
      <p>{submit}</p>
    </div>
  )
}

export default Formvalidation
