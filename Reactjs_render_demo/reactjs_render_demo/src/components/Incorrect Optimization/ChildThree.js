import React from 'react'

// React Render - Incorrect memo with children - https://www.youtube.com/watch?v=fVnnPImZ6a8

export const ChildThree = ({children,name}) => {
    console.log("ChildThree Render")
  
    return (
    <div>{children} {name}</div>
  )
}

/* In react,when a parent component renders,a child component might un-necessarily render.
To optimize this behaviour,you can use React.memo and pass in the child component. */
export const MemoizedChildThree=React.memo(ChildThree)

/* React.memo will perform a shallow comparison of the previous and new props and re-render the child
component only if the props have changed.
*/