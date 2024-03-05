import React,{useState} from "react";

// React Render - Same Element Reference - https://www.youtube.com/watch?v=K19dWjcI1Jk 

export const ParentOne=({children})=>{
    const[count,setCount]=useState(0)

    console.log("ParentOne Render")
    return(
        <div>
            <button onClick={()=>setCount((c)=>c+1)}>Count-{count}</button>
            {children}
        </div>
    )
}