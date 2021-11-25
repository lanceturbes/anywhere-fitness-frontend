import React from 'react'
import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="navbar-container">
      <h3>AnywhereFitness</h3>
      <nav className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/logout">Logout</NavLink>
      </nav>
    </header>
  )
}
