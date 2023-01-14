import React from 'react'

const Student = (props) => {
    console.log(props.data);
  return (
    <div>
        <h1>
            user {props.data.Name}
        </h1>
    </div>
  )
}

export default Student