import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hello"
      }
    //   this.clickHandler = this.clickHandler.bind(this)  // for using 3rd method of binding event handler
    }
    // clickHandler(){
    //     // this.setState({
    //     //     message:"Goodbye"   // this will show an error 
    //     // })
    //     console.log(this)   // will show undefined each time when click on the button
    // this is undefined in the event handler and that is reason event binding is necessary in class components 
    // }

    // methods for binding event handler in react
    // 1. using Bind keyword and bind the handler in rendor method
    // 2. using arrow functions in rendor method
    // 3. binding in the class constructor
    // 4. using arrow functions as class property
    // clickHandler(){
    //     this.setState({
    //         message:"Goodbye"
    //     })
    // }

    // 4. arrow function as class property
    clickHandler =()=>{
        this.setState({
            message:"Goodbye"
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click Me!</button>  1. using bind keyword in the rendor method */}
         {/* <button onClick={()=>this.clickHandler()}>Click Me!</button>  2. using arrow functions in the rendor method  */}
         <button onClick={this.clickHandler}>Click Me!</button>
      </div>
    )
  }
}

export default EventBind
