import React,{useReducer} from 'react'

const initialState ={
    firstCounter:0,
    secondCounter:0
}
const reducer =(state,action)=>{
    switch(action.type){
        case "increment":
            return {...state,firstCounter:state.firstCounter+action.value}
        case "decrement":
            return {...state,firstCounter:state.firstCounter-action.value}
        case "increment2":
            return {...state,secondCounter:state.secondCounter+action.value}
        case "decrement2":
            return {...state,firstCounter:state.secondCounter-action.value}
        case "Reset":
            return initialState
        default:
            return state
    }
}
function Counter2() {
    const[count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      <div>firstCounter - {count.firstCounter}</div>
      <div>secondCounter - {count.secondCounter}</div>
      <button onClick={()=>{dispatch({type:"increment" ,value:1})}}>Increment First</button>
      <button onClick={()=>{dispatch({type:"decrement",value:1})}}>Decrement First</button>
      <button onClick={()=>{dispatch({type:"increment2" ,value:1})}}>Increment second</button>
      <button onClick={()=>{dispatch({type:"decrement2",value:1})}}>Decrement second</button>
      <button onClick={()=>{dispatch({type:"increment",value:5})}}>Increment by 5</button>
      <button onClick={()=>{dispatch({type:"decrement",value:5})}}>Decrement by 5</button>
      <button onClick={()=>{dispatch({type:"Reset"})}}>Reset</button>
    </div>
  )
}

export default Counter2
