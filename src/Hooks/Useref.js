import React,{useRef} from 'react'

const Useref = () => {
    
    const inputRef = useRef(null)

    function changedata(){
        inputRef.current.value="64565"
        inputRef.current.focus()
    }

  return (
    <div>
        <input type="text" ref={inputRef}/>
        <button onClick={changedata}>useref</button>
    </div>
  )
}

export default Useref