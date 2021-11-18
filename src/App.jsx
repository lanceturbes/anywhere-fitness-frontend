import React,{useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import './styles/App.css'
import UserPage from "./components/UserPage";
function App() {
  const [userData, setUserData] = useState([]);
  const [disabled,setDisabled] = useState(true);



useEffect(() => {
    axios
      .get("https://anywhere-fitness-bwft5.herokuapp.com/api/classes")
      .then((res) => {
        console.log(res.data);
        return setUserData(res.data);
      })
      .catch((err) => {
        console.log("uh-oh!");
      });
  }, []);


  return (
    <>
      {/*
        React Router was updated not too long ago to v6!
        Syntax is different now; read here for more details:
        https://reactrouter.com/docs/en/v6/upgrading/v5#refactor-custom-routes
      */}
      <Navbar/>
      <Routes>
        <Route path ="/" element={<HomePage />} />
     
        <Route path ="/signup" element={<SignUp disabled ={disabled} setDisabled={setDisabled}/>} />
      
        <Route path="/login" element={<Login disabled ={disabled} setDisabled={setDisabled}/>} />
        
        <Route path="/dashboard" element={<UserPage users={userData} />} />

      </Routes>
    </>
  )
}

export default App
