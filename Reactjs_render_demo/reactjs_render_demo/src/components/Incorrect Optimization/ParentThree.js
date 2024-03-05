import React,{useState} from "react";
import { MemoizedChildThree } from "./ChildThree";
import { MemoizedChildFour } from "./ChildFour";

// React Render - Incorrect memo with children - https://www.youtube.com/watch?v=fVnnPImZ6a8
// React Render - Incorrect memo with Impure Component - https://www.youtube.com/watch?v=orrme2ydRfs

export const ParentThree=()=>{
    const [count,setCount]=useState(0)
    const [name,setName]=useState('Koodalarasan')

    console.log("ParentThree Render")
    return(
        <div>
            <h3>Please open console on the browser and check while clicking below buttons and refer ParentThree.js & ChildThree.js for coding</h3>
            <button onClick={()=>setCount((c)=>c+1)}>Count-{count}</button>
            <button onClick={()=>setName('Python Web Developer')}>Change Name</button>
            
            {/*While using ChildFour Component use below tag */}
            <MemoizedChildFour name={name}/>
            
            {/*While using ChildThree Component use below tag
            <MemoizedChildThree name={name}>
                <strong>Hello</strong>
            </MemoizedChildThree>*/}
        </div>
    )
}