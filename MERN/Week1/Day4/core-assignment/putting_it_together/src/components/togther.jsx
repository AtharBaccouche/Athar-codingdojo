import React, { Component } from 'react'

export default class PersonCard extends Component {

    constructor(props) {
        super(props)
        this.state={
            age:this.props.age
        }
    }
    increment= ()  =>{this.setState({age:this.state.age +1}) }
    render() {
        return (
            <div>
        
                <h1>{this.props.firstname},{this.props.lastname}</h1>
                <p>age:{this.state.age}</p>
                <p>haircolor:{this.props.haircolor}</p>
                <button onClick={this.increment }>Birthday button{this.props.firstname}{this.props.lastname}</button>
            </div>
        )
    }
}
