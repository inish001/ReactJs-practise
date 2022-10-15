import React from "react";

// function Click(){
// function clicked(){
//         console.log("button clicked")
//     }
//     return <button onClick={clicked}>Click Me!</button>  // button clicked will increase every time we click on the button 
// }
// export default Click


function Click(){
    function clicked(){
            console.log("button clicked")
        }
        return <button onClick={clicked()}>Click Me!</button>  // here button clicked will be already there in the console and will not increase on the click
    }
    export default Click