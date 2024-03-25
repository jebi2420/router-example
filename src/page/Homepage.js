import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to= "/about">Go to About page</Link>
    </div>
  )
}

export default Homepage
