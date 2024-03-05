import React,{useState} from "react";
import { MemoizedChildTwo } from "./ChildTwo";

// React Render - React Memo - https://www.youtube.com/watch?v=bZeBToIqaR4
// React Render - Questions on optimization -https://www.youtube.com/watch?v=8T1TRh8xDig

export const ParentTwo=()=>{
    const [count,setCount]=useState(0)
    const [name,setName]=useState('Koodalarasan')

    console.log("ParentTwo Render")
    return(
        <div>
            <h3>Please open console on the browser and check while clicking below buttons and refer ParentTwo.js & ChildTwo.js for coding</h3>
            <button onClick={()=>setCount((c)=>c+1)}>Count-{count}</button>
            <button onClick={()=>setName('Python Web Developer')}>Change Name</button>
            <MemoizedChildTwo name={name}/>
        </div>
    )
}