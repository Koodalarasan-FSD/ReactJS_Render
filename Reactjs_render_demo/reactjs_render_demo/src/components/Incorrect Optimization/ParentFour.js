import React,{useCallback, useMemo, useState} from "react";
import { MemoizedChildFive } from "./ChildFive";

// React Render - Incorrect memo with props Reference - https://www.youtube.com/watch?v=df6OFeIl2l0
// Please check only ChildFive.js


export const ParentFour=()=>{
    const [count,setCount]=useState(0)
    const [name,setName]=useState('Koodalarasan')

    const person={
        fname:"Bruce",
        lname:"Wayne"
    }
    
    const memoizedPerson=useMemo(()=>person,[])

    const handleClick=()=>{}
    const memoizedHandleClick=useCallback(handleClick,[])

    console.log("ParentFour Render")
    return(
        <div>
            <h3>Please open console on the browser and check while clicking below buttons and refer ParentFour.js & ChildFive.js for coding</h3>
            <button onClick={()=>setCount((c)=>c+1)}>Count-{count}</button>
            <button onClick={()=>setName('Python Web Developer')}>Change Name</button>
            
            {/*<MemoizedChildFive name={name} person={person}/>*/}
            
            {/*While using useMemo,use Below tag 
            <MemoizedChildFive name={name} person={memoizedPerson}/>*/}
            
            {/*While using useCallback,use Below tag*/}
            <MemoizedChildFive name={name} handleClick={memoizedHandleClick}/>
            
        </div>
    )
}