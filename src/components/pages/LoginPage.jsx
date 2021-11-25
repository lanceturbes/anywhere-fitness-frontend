// Libraries
import React from 'react'
import { Routes, Route, NavLink } from "react-router-dom"

// Components
import LoginForm from "../forms/LoginForm/LoginForm"
import RegisterForm from "../forms/RegisterForm/RegisterForm"

function LoginPage() {
  return (
    <section>
      <NavLink to="/auth/login">Log In</NavLink>
      <NavLink to="/auth/register">Register</NavLink>
      <Routes>
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
      </Routes>
    </section>
  )
}

export default LoginPage
