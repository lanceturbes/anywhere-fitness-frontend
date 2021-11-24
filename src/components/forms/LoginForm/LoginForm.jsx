// Libraries
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

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
    validate(e.target.name, e.target.value)
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const res = axios.post(`${API_URL}/auth/login`, formValues)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem("user_id", res.data.user.id)
      navigate("/dashboard")
    } catch (err) {
      setLoginError("Invalid Login! Please try again.")
    }
  }

  // Validation
  async function validate(inputName, inputValue) {
    try {
      await loginSchema.validate(inputName, inputValue)
      setSubmitDisabled(false)
    } catch (err) {
      setFormErrors(err.errors)
      setSubmitDisabled(true)
    }
  }

  return (
    <form>

    </form>
  )
}

export default LoginForm
