import React, { useEffect, useState } from 'react'

function Api() {
  const [data,setData]=useState([])

  const a=async ()=>{
    let userData={
      category: "movies",
      language: "kannada",
      genre: "all",
      sort: "voting"
    };
    let b=await fetch('https://hoblist.com/api/movieList',{method:'POST',body: JSON.stringify(userData),headers: {'Content-Type': 'application/json'}});
    let c=await b.json()
    setData(c.result)
    console.log(data)
  }
  useEffect(()=>{
    a()
  },[])
  a()
  return (
    <div>
    
     {
      data.map((e)=>{
        return(
          <>
          <div style={{display:'flex',border:'1px solid black'}}>
            
            <div style={{width:'35%'}}>
              <img style={{height:'200px',width:'200px',position:'relative',left:'30px',top:'40px',borderRadius:'10px'}} src={e.poster}/>
            </div>
            <div>
              <h4>{e.title}</h4>
              <h4>Genre :{e.genre}</h4>
              <h4>Director :{e.director}</h4>
              <h4>Starring :{e.stars}</h4>
              <h4>{e.runTime}Mins | {e.language} | {e.releasedDate} </h4>
              <h4 style={{color:'blue'}}>{e.pageViews} views | voted by {e.totalVoted} people</h4>
            </div>
          </div>
          <button style={{display:'block',width:'100%'}}>Watch Trailer</button>
          </>
        )
      })
     }
    </div>
  )
}

export default Api