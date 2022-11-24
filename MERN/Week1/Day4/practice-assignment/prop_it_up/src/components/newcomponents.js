import React, { Component } from 'react'

export default class PersonCard extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.firstname},{this.props.lastname}</h1>
        <p>age:{this.props.age}</p>
        <p>haircolor:{this.props.haircolor}</p>
      </div>
    )
  }
}
