import React from 'react'
import {Alert, Button} from "react-bootstrap"

export const ReactBoo = () => {
  return (
    <div>
        <Button>click me</Button>
        {
            <Alert variant='warning'>hello guys</Alert>
        }
    </div>
  )
}
