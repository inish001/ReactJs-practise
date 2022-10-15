import React, { Component } from "react";

class Welcome1 extends Component{
    render(){
        return(
            <h1>Hello, {this.props.name} from {this.props.city}</h1>
        )
    }
}
export default Welcome1