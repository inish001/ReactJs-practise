import React,{Component} from "react";
class Count extends Component{
    constructor(){
        super()
        this.state ={
            count:0
        }
    }
    // increment(){
    //     this.state.count = this.state.count +1
    //     console.log(this.state.count)      // using this method will only increasing the count value in the console but not rendering on the screen
    //                                     // so, never modified the state directly without using set state
    // }
    // increment(){
    //     this.setState({
    //         count:this.state.count+1
    //     },()=> console.log("call back value",this.state.count))
    //     console.log(this.state.count)   // rule no 1 written in copy
    // }

    // creating a increment five and calling increment() *5 times inside it

    // rule no 2
    increment(){
        this.setState((prevState)=>({
            count:prevState.count+1
        }))
    }
    incrementFive(){
        this.increment()    // value is changin to 1 instead of 5 , but 0 is log 5 times and call back value also
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render(){
        return(
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={()=>this.incrementFive()}>Increment</button>
            </div>
        )
    }
}
export default Count