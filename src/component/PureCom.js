import React, { Component, PureComponent } from 'react'

export default class PureCom extends PureComponent {
    constructor(){
        super()
        this.state={
            count :1
        }
    }
  render() {
    console.log("rendring");
    return (
      <div>
        {this.state.count}
        <button onClick={()=>this.setState({count : this.state.count+1})}>count plus</button>
      </div>
    )
  }
}
