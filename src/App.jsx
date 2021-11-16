import { Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import './styles/App.css'
function App() {
  return (
    <>
      {/*
        React Router was updated not too long ago to v6!
        Syntax is different now; read here for more details:
        https://reactrouter.com/docs/en/v6/upgrading/v5#refactor-custom-routes
      */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App
