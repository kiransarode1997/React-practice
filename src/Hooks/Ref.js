import React, { Component,createRef } from 'react'

export default class Useref extends Component {
    constructor(){
        super();
        this.inputref= createRef()
    }
    componentDidMount(){
        // console.warn( this.inputref);
    }

    getRef(){
        console.warn( this.inputref.current.value);
        this.inputref.current.style.color ="red"
    }

  render() {
    return (
      <div>
        <h1>useref</h1>
        <input ref={this.inputref} />
        <button onClick={()=>this.getRef()}>click me</button>
      </div>
    )
  }
}
