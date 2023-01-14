import React,{useState} from 'react'

const FormHandle = () => {

    const [name, setname] = useState('null')
    const [movie, setmovie] = useState(false)
    const [check, setcheck] = useState('')

    function getData(e){
        e.preventDefault()
        console.log(name,movie,check);
    }

  return (
    <div>
        <form onSubmit={getData}>
        <input placeholder='eneter name' type="text" onChange={(e)=>setname(e.target.value)}/><br/><br/>
        <select>
            <option  onChange={(e)=>setmovie(e.target.value)}>marvel</option>
            <option>dc comic</option>
            <option>game of throne</option>
        </select><br/><br/>
        <input type="checkbox" onChange={(e)=>setcheck(e.target.value)}/><span>accept terms codition</span><br/><br/>
        <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default FormHandle