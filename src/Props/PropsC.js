import React, { Component } from 'react'

export default class PropsC extends Component {
  render() {
    return (
      <div>student{this.props.name}</div>
    )
  }
}
