// for sharing similiar functionality creating a component named counter

import React, { Component } from 'react'

class Counter extends Component {   // this is the common functionality both are having
    constructor(props) {
        super(props);
    
        this.state = {
          count: 0,
        };
      }
      incrementCount = () => {
        this.setState((prevstate) => {
          return { count: prevstate.count + 1 };
        });
      };
  render() {
    return (
      <div>
        {this.props.render(this.state.count,this.incrementCount)}
      </div>
    )
  }
}

export default Counter
