import React from 'react'

const Propsf = (props) => {
  console.log(props);
  return (
    <>
    <h1>{props.data}</h1>
    <h1>{props.data.age}</h1>
    <h1>{props.data.surname}</h1>
    </>
  )
}

export default Propsf


 // const [ data , setData]=useState('kiran sarode')

  // function changevalue (){
  //   setData("kanchan sarode")
  // }

  // var data = {
  //   name: "kiran",
  //   age: 55,
  //   surname: "sarode",
  // };