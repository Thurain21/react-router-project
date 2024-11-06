import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav class="navbar bg-body-tertiary">
  <form class="container-fluid justify-content-start">
    <NavLink to="/home">
    <button class="btn btn-outline-success me-3" type="button">Home</button>
    </NavLink>
    <NavLink to= "/about">
    <button class="btn btn-outline-secondary" type="button">About</button>
    </NavLink>
    
  </form>
</nav>
  )
}

export default Navbar