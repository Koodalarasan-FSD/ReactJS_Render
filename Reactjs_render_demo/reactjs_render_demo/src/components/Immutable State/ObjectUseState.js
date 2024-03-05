import React, { useState } from 'react'

// State Immutability - https://www.youtube.com/watch?v=-hi-QQHWlHg

const initState={
    fname:"Bruce",
    lname:"Wayne"
}

export const ObjectUseState = () => {
  const [person,setPerson]=useState(initState)

  const changeName=()=>{
    //person.fname='Clark'
    //person.lname='Kent'
    //setPerson(person)

    const newPerson={...person}
    newPerson.fname='Clark'
    newPerson.lname='Kent'
    setPerson(newPerson)

    console.log("ObjectUseState Render")
  }
    return (
    <div>
        <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}
