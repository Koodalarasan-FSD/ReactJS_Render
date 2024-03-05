import React from 'react'

// React Render - React Memo - https://www.youtube.com/watch?v=bZeBToIqaR4 
// React Render - Questions on optimization -https://www.youtube.com/watch?v=8T1TRh8xDig


export const ChildTwo = () => {
    console.log("ChildTwo Render")
  
    return (
    <div>ChildTwo Component</div>
  )
}

/* In react,when a parent component renders,a child component might un-necessarily render.
To optimize this behaviour,you can use React.memo and pass in the child component. */
export const MemoizedChildTwo=React.memo(ChildTwo)

/* React.memo will perform a shallow comparison of the previous and new props and re-render the child
component only if the props have changed.
*/