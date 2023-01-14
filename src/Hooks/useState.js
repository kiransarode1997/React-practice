import React,{useState, u} from 'react'

const UseState = () => {
    const [first, setfirst] = useState("kiram")
  return (
    <>
    <div>{first}</div>
    <button onClick={()=>setfirst("sarode")}>click me</button>
    </>)
}

export default UseState