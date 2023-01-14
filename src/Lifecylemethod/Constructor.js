import React, { Component } from 'react'

export default class Constructor extends Component {
    constructor(){
        super();
        this.state={
            name:"kiran"
        }
    }
  render() {
    console.log("me");
    return (
      <div>Constructor{this.state.name}</div>
    )
  }
}
