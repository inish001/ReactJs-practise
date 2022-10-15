import React, { Component } from "react";

class ErrorBound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something Went Wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBound;

// as i had bound all components inside error bound it will still show error and did not rendor the other components cause it applies for whole component
// for applying it to each component we have to wrap it outside of the each component
