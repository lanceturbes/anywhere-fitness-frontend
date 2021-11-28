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

  // Validation
  function validate(inputName, inputValue) {
    yup.reach(loginSchema, inputName)
      .validate(inputValue)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [inputName]: false
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [inputName]: true
        })
        setSubmitDisabled(true)
      })
  }

  useEffect(() => {
    loginSchema.isValid(formValues).then(valid => setSubmitDisabled(!valid))
  }, [formValues])

  return (
    <form className="form" handleSubmit={handleSubmit}>
      <label>
        <span className="required">*</span>Username
        <input
          name="username"
          type="text"
          value={formValues.username}
          onChange={handleChange}
        />
      </label>

      <label>
        <span className="required">*</span>Password
        <input
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleChange}
        />
      </label>

      <button disabled={submitDisabled}>Log In</button>

      {loginError && <h4>{loginError}</h4>}
    </form>
  )
}

export default LoginForm
