import React from 'react'
import Childcom from './childcom'

const Paarent = () => {

    function par (data){
        alert("hello guys"+data.age)
    }

  return (
    <div>
    <Childcom data={par} />
        
    </div>
  )
}

export default Paarent