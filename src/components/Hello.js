import React from "react";

// let Hello = ()=>{
//     return(
//         <div>
//             <h1>Hello, Nishant</h1>
//         </div>
//     )
// }
// export default Hello

// the above code was using the jsx

// now without using the jsx
// to help us do that react library provides a create element method which takes 3 minimum parameters(first,second,third)

// let Hello = () => {
//     return React.createElement('div',null,'<h1>Hello, Nishant</h1>')
// };
// export default Hello

// this will not print Hello, Nishant with h1 size instead it will print <h1>Hello, Nishant</h1>

// to overcome this we have to use another react create element method
// this method will print Hello, Nishant in h1 size

// let Hello =()=>{
//     return React.createElement('div',null,React.createElement('h1',null,'Hello, Nishant'))
// }
// export default Hello

// we can add properties to the element like id and class by adding value in the second parameter of react create element method

let Hello = ()=>{
    return React.createElement('div',{id:'siuu',className:'cr7'},'hello')  // this will add id and class to the div tag
}
export default Hello