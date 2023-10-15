import React, { useState } from 'react';
function Counter(){
    const [count,setCount]=useState(0);
return(
    <>
    <h1>Count:{count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Incr</button>
    <button onClick={()=>{setCount(count-1)}}>Decr</button>
    <button onClick={()=>{setCount(count+5)}}>Incr 5</button>
    <button onClick={()=>{setCount(count-5)}}>Decr 5</button>

    </>
)
}
export default Counter