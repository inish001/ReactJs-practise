import React, { Component } from 'react'

class LFA extends Component {
    constructor(props){
        super(props)
        this.state ={
            favcolor:"red"
        }
    }
    componentDidMount(){
        console.log("before settimeout")
        setTimeout(() => {
            this.setState({favcolor:"yellow"})
            console.log("after settimeout")
        },3000);
    }
  render() {
    return (
      <div>
        <h1>my color is {this.state.favcolor}</h1>
      </div>
    )
  }
}

export default LFA
