import React from 'react'
// let Greet1 =(props)=>{
//     return(
//     <h1>Hello, {props.name}</h1> 
//     )
// }
// export default Greet1

// adding one more property to it

let Greet1 =(props)=>{
    return(
        <div>
        <h1>Hello, {props.name} from {props.city}</h1>
        {props.children}
        </div>
    )
}
export default Greet1