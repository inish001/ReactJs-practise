import React, { Component } from "react";

class LifeCycleD extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Nishant",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("D getDerived");
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("D shouldComponetUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("D snapshot");
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("D DidUpdate");
  }

  render() {
    console.log("D render")
    return (
      <div>
        <div>LifeCycle D</div>
      </div>
    );
  }
}

export default LifeCycleD;
