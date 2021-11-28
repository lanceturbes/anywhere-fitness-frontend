// Libraries
import React from 'react'
import { Routes, Route } from "react-router-dom"

// Components
import UserPage from "./components/pages/Dashboard"
import HomePage from "./components/pages/HomePage"
import Navbar from "./components/elements/Navbar"
import AuthPage from "./components/pages/AuthPage"
import Logout from './components/elements/Logout'
import Footer from "./components/elements/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/*" element={<AuthPage />} />
        <Route path="/dashboard" element={<UserPage />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
