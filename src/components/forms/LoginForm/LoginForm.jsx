// Libraries
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import * as yup from "yup"

// Config
import { API_URL } from "../../../config"
import initialValues from "./initialValues.json"

// Schema
import loginSchema from '../../../schemas/loginSchema'

function LoginForm() {
  // State Management
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState(initialValues)
  const [loginError, setLoginError] = useState("")
  const [submitDisabled, setSubmitDisabled] = useState(true)

  // Navigation
  const navigate = useNavigate()

  // Event Handlers
  function handleChange(e) {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
    validate(e.target.name, e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const res = axios.post(`${API_URL}/auth/login`, formValues)
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("user_id", res.data.user.id)
      navigate("/dashboard")
    } catch (err) {
      setLoginError("Invalid Login! Please try again.")
    }
  }

  function validate(inputName, inputValue) {
    yup.reach(loginSchema, inputName)
      .validate(inputValue)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [inputName]: ""
        })
        if (formValues.username && formValues.password) {
          setSubmitDisabled(false)
        }
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [inputName]: err.errors[0]
        })
        setSubmitDisabled(true)
      })
  }

  return (
    <form handleSubmit={handleSubmit}>
      <label>
        Username
        <input
          name="username"
          type="text"
          value={formValues.username}
          onChange={handleChange}
        />
      </label>

      {formErrors.username && <p>{formErrors.username}</p>}

      <label>
        Password
        <input
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleChange}
        />
      </label>

      {formErrors.password && <p>{formErrors.password}</p>}

      <button disabled={submitDisabled}>Log In</button>

      {loginError && <h4>{loginError}</h4>}
    </form>
  )
}

export default LoginForm
