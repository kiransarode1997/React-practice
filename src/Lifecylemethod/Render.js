import React, { Component } from 'react'

export default class Render extends Component {

    constructor(){
        super()
        this.state={
            email :"kiransarode1997@gmail.com"
        }
    }

  render() {
    console.warn('render method',this.state.email)
    return (
        <>
      <div>{this.state.email}</div>
      <button onClick={()=>this.setState({email:"sarode199"})}>update name</button>
      </>)
  }
}
