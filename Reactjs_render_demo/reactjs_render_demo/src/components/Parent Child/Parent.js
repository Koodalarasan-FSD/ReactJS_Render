import React,{useState} from "react";
import { Child } from "./Child";

// React Render - Parent and Child - https://www.youtube.com/watch?v=b_DtnmQkhWM 

export const Parent=()=>{
    const[count,setCount]=useState(0)

    console.log("Parent Render")
    return(
        <div>
            <h3>Please open console on the browser and check while clicking below buttons and refer Parent.js & Child.js for coding</h3>
            <button onClick={()=>setCount((c)=>c+1)}>Count-{count}</button>
            <button onClick={()=>setCount(0)}>Count to 0</button>
            <button onClick={()=>setCount(5)}>Count to 5{count}</button>
            <Child/>
        </div>
    )
}