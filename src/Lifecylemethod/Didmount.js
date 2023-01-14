import React, { Component } from "react";

export default class Didmount extends Component{

    constructor()
    {
        super()
        this.state={
            name :"kiran"
        }
        console.warn("constructore");
    }
    componentDidMount(){
        console.warn('componentDidMount');
    }

    render(){
        console.warn('render');
        return(
            <div>
                <div>
                {this.state.name}
                </div>
                <button onClick={()=>this.setState({"name":"sarode"})}>click me</button>
            </div>
        )
    }
}