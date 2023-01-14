import React, { Component } from "react";

class User extends Component {
  constructor() {
    super();
    this.state = {
      name: "vijay",
      age: 23,
    };
  }

  apple() {
    this.setState({
      age: this.state.age + 1,
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <button onClick={() => this.apple()}>change value</button>
      </>
    );
  }
}

export default User;
