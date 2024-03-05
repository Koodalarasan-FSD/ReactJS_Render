import React, { useState } from 'react'
import { MemoizedChildA } from './ContextChildren'

// React Render - Context - https://www.youtube.com/watch?v=QIhKdivu0ok
// React Render - Context and memo - https://www.youtube.com/watch?v=OyW9wL1jf3A
// React Render - Context and Same Element Reference - https://www.youtube.com/watch?v=C5ORrpny8Nw


export const CountContext=React.createContext()
const CountProvider=CountContext.Provider

export const ContextParent = ({children}) => {
  const [count,setCount]=useState(0)
  console.log("ContextParent Render")
    return (
    <div>
        <button onClick={()=>setCount(c=>c+1)}>Count {count}</button>
        <CountProvider value={count}>
            {children}
        </CountProvider>
    </div>
  )
}
