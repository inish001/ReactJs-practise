import React ,{useContext} from 'react'
import { CountContext } from './ComponentA'

function ComponentC() {
    const countContext = useContext(CountContext)
  return (
    <div>
        Component C1 count {countContext.countState}
      <button onClick={()=>countContext.countDispatch("increment")}>Increment</button>
      <button onClick={()=>countContext.countDispatch("decrement")}>Decrement</button>
      <button onClick={()=>countContext.countDispatch("Reset")}>Reset</button>
    </div>
  )
}

export default ComponentC
