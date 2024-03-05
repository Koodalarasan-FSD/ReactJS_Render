import React from 'react'

// React Render - Incorrect memo with Impure Component - https://www.youtube.com/watch?v=orrme2ydRfs
// Please also check ParentThree.js.

export const ChildFour = ({name}) => {
    const date=new Date()
  console.log("ChildFour Render")
    return (
    <div>Hello {name}, It is currently {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</div>
  )
}

export const MemoizedChildFour=React.memo(ChildFour)
