import React from "react";
import { Table } from "react-bootstrap";

const Map = () => {
  //   const student = ["kiran", "shubham", "akshhay", "dinesh"];

  // student.map((item)=>{
  //     console.log("studen name is"+item)
  // })

  // for (let i = 0; i < student.length; i++) {
  //     console.log("friend name is"+student[i])
  // }

  const student = [
    { Name: "kiran", number: 6445, email: "kiran@123" },
    { Name: "shubham", number: 5654, email: "shubham@123" },
    { Name: "akshay", number: 6445, email: "akshay@123" },
    { Name: "peter", number: 6445, email: "peter@123" },
  ];

  return (
    <div>
      <h1 style={{'textAlign':'center'}}>Map</h1>
      <div>
        <Table striped bordered hover variant="dark">
            <tbody>
          <tr style={{'textAlign':'center'}}>
            <th >Name</th>
            <th>Number</th>
            <th>Email</th>
          </tr>
          {student.map((item,i) => 
            item.number === 6445 ? 
            <tr key={i} style={{'textAlign':'center'}}>
                <td>{item.Name}</td>
                <td>{item.number}</td>
                <td>{item.email}</td>
              </tr>:null
            
          )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Map;
