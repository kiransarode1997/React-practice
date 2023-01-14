import React from "react";
import { Table } from "react-bootstrap";

const MapTwo = () => {
  const users = [
    {
      name: "Anil",
      email: "anil@test.com",
      address: [
        { hm: "101", city: "Noida", country: "India" },
        { hm: "10", city: "Gurgaon", country: "India" },
        { hm: "23", city: "Noida", country: "India" },
        { hm: "45", city: "Delhi", country: "India" },
      ],
    },
    {
      name: "Burce",
      email: "bruce@test.com",
      address: [
        { hm: "101", city: "Noida", country: "India" },
        { hm: "10", city: "Gurgaon", country: "India" },
        { hm: "23", city: "Noida", country: "India" },
        { hm: "45", city: "Delhi", country: "India" },
      ],
    },
    {
      name: "Peter",
      email: "peter@test.com",
      address: [
        { hm: "101", city: "Noida", country: "India" },
        { hm: "10", city: "Gurgaon", country: "India" },
        { hm: "23", city: "Noida", country: "India" },
        { hm: "45", city: "Delhi", country: "India" },
      ],
    },
    {
      name: "Sam",
      email: "sam@test.com",
      address: [
        { hm: "101", city: "Noida", country: "India" },
        { hm: "10", city: "Gurgaon", country: "India" },
        { hm: "23", city: "Noida", country: "India" },
        { hm: "45", city: "Delhi", country: "India" },
      ],
    },
  ];
  console.log(users);

  return (
    <div>
      <Table variant="dark" striped>
        <tbody style={{ textAlign: "center" }}>
          <tr>
            <td>name</td>
            <td>email</td>
            <td>address</td>
          </tr>

          {users.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Table variant="dark" striped>
                    <tbody>
                      <tr>
                        <td>hm</td>
                        <td>city</td>
                        <td>country</td>
                      </tr>
                      {item.address.map((data) => (
                        <tr>
                          <td>{data.hm}</td>
                          <td>{data.city}</td>
                          <td>{data.country}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default MapTwo;
