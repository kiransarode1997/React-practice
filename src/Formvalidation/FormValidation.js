import React,{useState} from 'react'

const FormValidation = () => {

    const [user, setuser] = useState('')
    const [password, setpassword] = useState("")
    const [usererror, setUsererror] = useState(false)
    const [passwordnot, setPasswordnot] = useState(false)
    
    function getData(e){

        if(user.length<3|| password <3){
            alert("type correctvalue")
        }else{
            alert("all good")
        }
        e.preventDefault( )
    }

    function changeHandler (e){
        let item = e.target.value
        if(item.length<3){
            // console.warn('invalid error');
            setUsererror(true)
        }else{
            setUsererror(false)
        }
        setuser(item)
    }
    function passwordhandle (e){
        let item = e.target.value
        if(item.length<8){
            // console.warn('invalid error');
            setPasswordnot(true)
        }else{
            setPasswordnot(false)
        }
        setpassword(item)
    }

  return (
    <div>
        <h1>login form</h1>
        <form onSubmit={getData}>
        <input placeholder='enter user id' type="text" onChange={changeHandler} /><br/>{usererror ?<span>not found value</span>: null}
        <input placeholder='enter user password' type="text" onChange={passwordhandle}  /><br/>{passwordnot ?<span>not found password</span>: null}
        <button type='submit'>Login</button>
        </form>
       
    </div>
  )
}

export default FormValidation