import React,{useState} from 'react'

const Condition = () => {
    const [loggeInd, setloggeInd] = useState(3)
    
  return (
    <div>{loggeInd===1 ? "welcome kiran" :loggeInd===2? "welcome guest": "welcome 3"}</div>
  )
}

export default Condition