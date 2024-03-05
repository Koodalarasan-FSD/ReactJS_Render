import React, { useState } from 'react'
import { ParentOne } from './ParentOne'
import { ChildOne } from './ChildOne'

// React Render - Same Element Reference - https://www.youtube.com/watch?v=K19dWjcI1Jk 

export const GrandParent = () => {
  const [newCount,setNewCount]=useState(0)
    return (
    <div>
        <h3>Please open console on the browser and check while clicking below buttons and refer ParentOne.js, ChildOne.js & GrandParent.js for coding</h3>
        <button onClick={()=>setNewCount((nc)=>nc+1)}>GrandParent Count-{newCount}</button>
        <ParentOne newCount={newCount}>
            <ChildOne/>
        </ParentOne>
    </div>
  )
}
