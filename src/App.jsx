// Libraries
import React from 'react'
import { Routes, Route } from "react-router-dom"

// Components
import UserPage from "./components/pages/Dashboard"
import HomePage from "./components/pages/HomePage"
import Navbar from "./components/elements/Navbar"
import LoginPage from "./components/pages/LoginPage"
import Logout from './components/elements/Logout'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/dashboard" element={<UserPage />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  )
}

export default App
