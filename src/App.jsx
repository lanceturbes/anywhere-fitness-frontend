import React from 'react'
import { Routes, Route } from "react-router-dom"

import UserPage from "./components/UserPage"
import HomePage from "./components/HomePage"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Logout from "./components/Logout"

import './styles/App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<UserPage />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  )
}

export default App
