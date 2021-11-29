// Libraries
import React from 'react'
import { Routes, Route, NavLink } from "react-router-dom"

// Components
import LoginForm from "../forms/LoginForm/LoginForm"
import RegisterForm from "../forms/RegisterForm/RegisterForm"

function AuthPage() {
  return (
    <section className="auth-page">
      <div className="auth-box">
        <nav className="auth-nav">
          <div className="auth-navlink-wrapper">
            <NavLink
              className={({ isActive }) => "auth-navlink" + (isActive ? " active-auth-navlink" : "")}
              to="/auth/login"
            >
              Log In
            </NavLink>
            <NavLink
              className={({ isActive }) => "auth-navlink" + (isActive ? " active-auth-navlink" : "")}
              to="/auth/register"
            >
              Register
            </NavLink>
          </div>
        </nav>
        <Routes>
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
        </Routes>
      </div>
    </section>
  )
}

export default AuthPage
