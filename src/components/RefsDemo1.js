// using call back refs

import React, { Component } from "react";

class RefsDemo1 extends Component {
  constructor(props) {
    super(props);
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }
  componentDidMount() {
    if (this.cbRef) {
      return this.cbRef.focus();
    }
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.setCbRef} />
      </div>
    );
  }
}

export default RefsDemo1;




