import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props){
        super(props)
        this.inputRef = React.createRef();
        // console.log(this.inputRef)   // will show current property to null as it runs before rendering of the input component
    }
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)    // will show current property input
    }
    handleClick =()=>{
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/> 
        <button onClick={this.handleClick}>Click Me!</button>       
      </div>
    )
  }
}

export default RefsDemo
