import React from 'react'
import Student from './Student';

const Resuse = () => {

    const users = [
        { Name: "kiran", number: 6445, email: "kiran@123" },
        { Name: "shubham", number: 5654, email: "shubham@123" },
        { Name: "akshay", number: 6445, email: "akshay@123" },
        { Name: "peter", number: 6445, email: "peter@123" },
      ];
    

  return (
    <div>
        <h1>hello</h1>
        {
            users.map((item, i)=>
            <div key={i}><Student data={item}/></div>
                
            )
        }
    </div>
  )
}

export default Resuse