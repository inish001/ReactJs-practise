import React from 'react'

function Child(props) {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
    <button onClick={()=>props.greetHandler("child")}>Greet Parent</button> 
     {/* passing a parameter when calling parent method from child component */}
    </div>
  )
}

export default Child;
