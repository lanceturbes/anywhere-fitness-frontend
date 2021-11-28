// Libraries
import React from 'react'
import { Routes, Route, NavLink } from "react-router-dom"

// Components
import LoginForm from "../forms/LoginForm/LoginForm"
import RegisterForm from "../forms/RegisterForm/RegisterForm"

function LoginPage() {
  return (
    <section className="auth-page">
      <div className="auth-box">
        <nav className="auth-nav">
          <NavLink
            className={({ isActive }) => "auth-navlink login-button" + (isActive ? " active-auth-navlink" : "")}
            to="/auth/login"
          >
            Log In
          </NavLink>
          <NavLink
            className={({ isActive }) => "auth-navlink register-button" + (isActive ? " active-auth-navlink" : "")}
            to="/auth/register"
          >
            Register
          </NavLink>
        </nav>
        <Routes>
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
        </Routes>
      </div>
    </section>
  )
}

export default LoginPage
