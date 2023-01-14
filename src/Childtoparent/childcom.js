import React from 'react'

const childcom = (props) => {
   let kiran={
    name:"kiran",
    age :25
   }
  return (
    <div>
        <h1></h1>
        <button onClick={()=>props.data(kiran)}>click me</button>
    </div>
  )
}

export default childcom