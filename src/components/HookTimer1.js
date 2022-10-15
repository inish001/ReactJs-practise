// // only for clearing my doubt

// import React, { useEffect, useState } from 'react'

// function HookTimer1() {
//     const[timer,setTimer] = useState(0)
//     let interval;
//     useEffect(()=>{
//         interval = setInterval(()=>{
//             setTimer(prevstate=>prevstate+1)
//         },1000)
//         return clearInterval(interval)
//     }) 
//   return (
//     <div>
//       Hook Timer - {timer}
//       <button>Clear Interval</button>
//     </div>
//   )
// }

// export default HookTimer1
