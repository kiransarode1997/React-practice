import React, { Component } from "react";

export default class DidUpdate extends Component {
  constructor() {
    super();

    this.state={
        count : 1
    }

    console.warn("constructor");
  }
  componentDidUpdate(preProps, preState, snapShot) {
    console.warn("componentDidUpdate",preState.count,this.state.count);
  }
  render() {
    // console.warn("render");
    return <div>
        <div>
        {this.state.count}
        </div>
        <button onClick={()=>this.setState({count: 1})}>click me</button>
    </div>;
  }
}
