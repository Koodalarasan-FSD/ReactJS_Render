import React from 'react'

// React Render - Incorrect memo with props Reference - https://www.youtube.com/watch?v=df6OFeIl2l0
// Please check only ParentFour.js

export const ChildFive = ({name,person}) => {
    console.log("ChildFive Render")
  return (
    <div>
        Hello {name} {person.fname} {person.lname}
    </div>
  )
}

export const MemoizedChildFive=React.memo(ChildFive)