import React,{useState} from 'react';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import './styles/App.css'
import UserPage from "./components/UserPage";
function App() {
  const [users,setUsers] = useState([]);

  const userSubmit= () => {
    axios.get(`https://anywhere-fitness-bwft5.herokuapp.com/api/users`)
    .then(res => {
    setUsers(res.data)
    })
    .catch(err => console.log(err))
}


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
      
        <Route path ="/getstarted" element={<LandingPage />} />
     
        <Route path ="/signup" element={<SignUp userSubmit={userSubmit}/>} />
      
        <Route path="/login" element={<Login />} />
      
        <Route path="/users" element={<UserPage users={users} />} />
      </Routes>
    </>
  )
}

export default App
