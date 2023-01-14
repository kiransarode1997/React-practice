// import React,{useEffect, useState} from 'react'

// const UseEffect = () => {

//     const [count, setcount] = useState(1)

//     useEffect(()=>{
//         console.warn("hello world");
//     }, count)

//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={()=>setcount(count+1)}> click me </button>
//     </div>
//   )
// }

// export default UseEffect

import React, { useState, useEffect } from "react";

const UseEffect = (props) => {

    // const [data, setdata] = useState(10)
    // const [count , setcount ] = useState(100)

//   useEffect(() => {
//     console.log("useeffect call");
//   },[data]);
//   useEffect(() => {
//     console.log("useeffect call",count);
//   },[count]);

  return (
    <div>
        <h1>Count : {props.count}</h1>
        <h1>Data : {props.data}</h1>
      {/* <button onClick={()=>setcount(count+1)}>update count</button>
      <button onClick={()=>setdata(data+1)}>update data</button> */}
    </div>
  );
};

export default UseEffect;
