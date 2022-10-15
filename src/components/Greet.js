import React from "react";

// function Greet(){
//     return <h1>Hello,</h1>
// }

// using arrow functions

// let Greet = ()=>{
//     return <h1>Hello, Nishant</h1>  // no neeed of return if there is only one statement ()=> <h1>hello</h1>
// }

// export default Greet  
// here we are exporting greet component as a default export, this allows us to import the component in the app.js with any name 

export let Greet =()=><h1>Hello, Nishant</h1> 
 // this is termed as named exports, in this situation you have to import the component with the exact same name