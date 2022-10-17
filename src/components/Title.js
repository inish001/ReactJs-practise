import React from 'react'

function Title() {
  console.log("title rendering")
  return <h2>Use Call back Hook</h2>
}

export default React.memo (Title)
