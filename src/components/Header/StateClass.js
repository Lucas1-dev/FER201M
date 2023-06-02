import React, { Component } from 'react'

export default class StateClass extends Component {
    constructor(){
        super()
        this.state={
            count : 0
        }
    }
  render() {
    return (
      <div>StateClass
        <p>You Clicked {this.state.count} times</p>
        <bottom onClick={()=>
        this.setState({count: this.state.count + 1})}>
            Click ME
        </bottom>

        
      </div>
    )
  }
}
