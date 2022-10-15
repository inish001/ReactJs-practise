import React, { Component } from "react";
// import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Nishant",
    };
    console.log("LifeCycleA constructor");
  }
  static getDerivedStateFromProps(props,state) {
    console.log("LifeCycleA GetDerived");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleA DidMount");
  }

  render() {
    console.log("LifeCycleA Render");
    return (
      <div>
        <div>Lifecycle A</div>
        {/* <LifeCycleB/> */}
      </div>
    );
  }
}

export default LifeCycleA;
