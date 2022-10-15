import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <h2>sorry</h2>
      <p>page not found</p>
      <Link to="/">back to home</Link>
    </div>
  )
}

export default NotFound
