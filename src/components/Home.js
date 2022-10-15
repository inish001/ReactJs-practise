import { useState } from "react";
import React from "react";

// const Home =()=>{
//     let name ="mario"
//     const clickHandler =()=>{
//         name = "luigi"
//         console.log(name)  // name is updating in the console but not on the screen to do so we have to use useState
//     }
const Home =()=>{
    const[name,setName] = useState("mario")
    const[age,setAge]= useState(33)
    const clickHandler=()=>{
        setName("luigi")   // this will change name to luigi
        setAge(56)       // change its age also
    }
    return(
        <>
            <h2>{name} is of {age} years</h2>
            <button onClick={clickHandler}>Click Me!</button>
        </>
    )
}
export default Home