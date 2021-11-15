import { Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage"

function App() {
  return (
    <>
      {/*
        React Router was updated not too long ago to v6!
        Syntax is different now; read here for more details:
        https://reactrouter.com/docs/en/v6/upgrading/v5#refactor-custom-routes
      */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
