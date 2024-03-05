import React,{useState} from "react";

// React Render useState - https://www.youtube.com/watch?v=OQYsHvEq7nE

export const UseState1=()=>{
    const[count,setCount]=useState(0)

    console.log("UseState Render")
    return(
        <div>
            <h3>Please open console on the browser and check while clicking below buttons and refer UseState1.js for coding</h3>
            <button onClick={()=>setCount((c)=>c+1)}>Count-{count}</button>
            <button onClick={()=>setCount(0)}>Count to 0</button>
            <button onClick={()=>setCount(5)}>Count to 5{count}</button>
        </div>
    )
}