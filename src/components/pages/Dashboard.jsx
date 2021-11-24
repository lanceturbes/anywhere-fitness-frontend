import React, { useState, useEffect } from "react"
import axios from "axios"

import axiosWithAuth from "./../../utilities/axiosWithAuth"

const UserPage = () => {
  const [classData, setClassData] = useState([])
  const [userClassData, setUserClassData] = useState([])

  function getAllClasses() {
    try {
      return axios.get("https://anywhere-fitness-bwft5.herokuapp.com/api/classes")
    } catch (err) {
      console.error("could not get all classes!")
    }
  }

  function getUserClasses() {
    try {
      const user_id = localStorage.getItem("user_id")
      return axios.get(`https://anywhere-fitness-bwft5.herokuapp.com/api/users/${user_id}/classes`)
    } catch (err) {
      console.error("could not get user's classes!")
    }
  }

  function joinClass(classId) {
    try {
      return axiosWithAuth().get(`https://anywhere-fitness-bwft5.herokuapp.com/api/classes/${classId}/join`)
    } catch (err) {
      console.error("could not join class!")
    }
  }

  useEffect(() => {
    getAllClasses().then(res => {
      setClassData(res.data)
    })
    getUserClasses().then(res => {
      setUserClassData(res.data)
    })
  }, [])

  return (
    <section>
      <div className="classes-container">
        <h2 className="classes-section-title">Your classes</h2>
        {userClassData.map(res => {
          return (
            <div className="userCard" key={res.id}>
              <h1>{res.name}</h1>
              <ul className="infoList">
                <li>Location: {res.location}</li>
                <li>Class Type: {res.type}</li>
                <li>Intensity: {res.intensity}</li>
              </ul>
            </div>
          )
        })}
      </div>

      <div className="classes-container">
        <h2 className="classes-section-title">All Classes</h2>
        {classData.map(res => {
          return (
            <div className="userCard" key={res.id}>
              <h1>{res.name}</h1>
              <p>{res.instructor}</p>
              <ul className="infoList">
                <li>Location: {res.location}</li>
                <li>Class Type: {res.type}</li>
                <li>Intensity: {res.intensity}</li>
              </ul>
              <button
                className="btn"
                onClick={() => { joinClass(res.id) }}
              >
                Join
              </button>
            </div>
          )
        })}
      </div>

    </section>
  )
}

export default UserPage
