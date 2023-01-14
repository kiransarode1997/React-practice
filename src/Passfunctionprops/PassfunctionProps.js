import React from 'react'

const PassfunctionProps = (props) => {
    console.log(props);
  return (
    <div>
        <h1>user componnet</h1>
        <button onClick={props.data}>click me</button>
    </div>
  )
}

export default PassfunctionProps