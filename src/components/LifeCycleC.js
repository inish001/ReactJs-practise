import React, { Component } from "react";
import LifeCycleD from "./LifeCycleD";

class LifeCycleC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Nishant",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("C getDerived");
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("C shouldComponetUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("C snapshot");
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("C DidUpdate");
  }
  changeState = () => {
    this.setState({
      name: "harsh",
    });
  };

  render() {
    console.log("C render")
    return (
      <div>
        <div>LifeCycle C</div>
        <button onClick={this.changeState}>Change state</button>
        <LifeCycleD />
      </div>
    );
  }
}

export default LifeCycleC;
