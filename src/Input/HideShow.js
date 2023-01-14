import React,{useState} from 'react'

const HideShow = () => {

    const [status, setstatus] = useState(true)

  return (
    <div>
        {
            status ? <h1>hideshow</h1> : null
        }
        <button onClick={()=>setstatus(false)}>hide</button>
        <button onClick={()=>setstatus(true)}>show</button>
    </div>
  )
}

export default HideShow