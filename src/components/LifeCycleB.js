import React, { Component } from "react";

class LifeCycleB extends Component {
constructor(props) {
    super(props);

    this.state = {
      name: "Nishant",
    };
    console.log("LifeCycleB constructor");
  }
  static getDerivedStateFromProps() {
    console.log("LifeCycleB GetDerived");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleB DidMount");
  }

  render() {
    console.log("LifeCycleB Render");
    return (
      <div>
        <div>Lifecycle B</div>
      </div>
    );
  }
}

export default LifeCycleB;
