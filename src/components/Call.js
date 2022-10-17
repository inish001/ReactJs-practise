import React from 'react'

function Call({text,call}) {
  console.log(`Rendering ${text}`)
  return (
    <div>
      {text} - {call}
    </div>
  )
}

export default React.memo (Call)
