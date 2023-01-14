import React,{useState} from 'react'

const UserF = () => {

    const [data, setData]=useState(0)

    function clickhange(){
        setData(data+1)
    }
  
    function second(){
        setData(data-1)
    }

  return (

    <div>
          <h1>{data}</h1>
      <button onClick={clickhange}>hello</button>
      <button onClick={second}>imus</button>
    </div>
  )
}

export default UserF