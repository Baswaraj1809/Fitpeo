import React, { useState } from 'react'

function Datefilter() {

    let arr = [{
        date: '06/02/2023',
        name: 'indiana jones and the dial of destiny',
        message: '2023 2h 34m',
        rating: '8.9'
    },
    {
        date: '07/04/2023',
        name: 'indiana jones and the dial of destiny',
        message: '2023 2h 34m',
        rating: '8.9'
    },
    {
        date: '04/16/2023',
        name: 'indiana jones and the dial of destiny',
        message: '2023 2h 34m',
        rating: '7.9'
    },
    {
        date: '06/20/2023',
        name: 'indiana jones and the dial of destiny',
        message: '2023 2h 34m',
        rating: '8.9'
    },
    {
        date: '06/25/2023',
        name: 'indiana jones and the dial of destiny',
        message: '2023 2h 34m',
        rating: '8.9'
    },
    {
        date: '06/30/2023',
        name: 'indiana jones and the dial of destiny',
        message: '2023 2h 34m',
        rating: '7.9'
    },
    ]


const [fromdate,setFromdate]=useState('')
const [todate,setTodate]=useState('')
const [display,setDisplay]=useState([])



const handleSubmit=()=>{
    const fromObj=new Date(fromdate);
    const toObj=new Date(todate);

    const item=arr.filter((ele)=>{
        const date=new Date(ele.date)
        return date >= fromObj && date <= toObj;
    });
    setDisplay(item)
};
    
  return (
    <>
    <div>
      <input type='date' placeholder='Enter Start Date' value={fromdate}  onChange={(e)=>setFromdate(e.target.value)}/>
      <input type='date' placeholder='Enter End date' value={todate} onChange={(e)=>setTodate(e.target.value)}/>
    <br></br>
    <button className='btn btn-info' onClick={handleSubmit}>Submit</button>
    </div>
    {display.map((e)=>(
            <div    style={{display:'flex'}}>
                    <div style={{border:'2px solid black'}} >
            <h1>{e.name}</h1>
            <h4>{e.message}</h4>
            <p>{e.rating}</p>
            <input type='button' value='print' onClick={() => window.print()}/>
            </div>
            </div>
            
        ))}
  </>
  )
}

export default Datefilter
