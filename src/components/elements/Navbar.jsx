import React from 'react'
import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="navbar-container">
      <h3 className="navbar-title">AnywhereFitness</h3>
      <nav className="navbar-nav">
        <NavLink className="navbar-navlink" to="/">Home</NavLink>
        <NavLink className="navbar-navlink" to="/logout">Logout</NavLink>
      </nav>
    </header>
  )
}
