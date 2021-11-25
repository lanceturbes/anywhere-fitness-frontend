// Libraries
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import registerSchema from '../../../schemas/registerSchema'
import * as yup from 'yup'

// Configuration
import initialValues from "./initialValues.json"
import { API_URL } from '../../../config'

function RegisterForm() {
  const [formValues, setFormValues] = useState(initialValues)
  const [disabled, setDisabled] = useState(true)
  const [formErrors, setFormErrors] = useState(initialValues)

  // Event Handlers
  function handleChange(e) {
    validate(e.target.name, e.target.value)
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const registerPayload = {
      username: formValues.username,
      password: formValues.password,
      email: formValues.email,
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      instructor_auth: formValues.instructorCode
    }
    axios.post(`${API_URL}/auth/register`, registerPayload)
      .then((res) => {
        window.localStorage.setItem('token', res.data.token)
      })
      .catch(err => {
        console.error(err.message)
      })
  }

  // Validation
  function validate(inputName, inputValue) {
    yup.reach(registerSchema, inputName)
      .validate(inputValue)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [inputName]: false
        })
      })
      .catch(() => {
        setFormErrors({
          ...formErrors,
          [inputName]: true
        })
      })
  }

  useEffect(() => {
    registerSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {formErrors.first_name && <span classname="required">* </span>}First Name
        <input
          value={formValues.first_name}
          name="first_name"
          type="text"
          onChange={handleChange}
        />
      </label>

      <label>
        {formErrors.last_name && <span classname="required">* </span>}Last Name
        <input
          value={formValues.last_name}
          name="last_name"
          type="text"
          onChange={handleChange}
        />
      </label>

      <label>
        {formErrors.username && <span classname="required">* </span>}Username
        <input
          value={formValues.username}
          name="username"
          type="text"
          onChange={handleChange}
        />
      </label>

      <label>
        {formErrors.email && <span classname="required">* </span>}Email
        <input
          value={formValues.email}
          name="email"
          type="email"
          onChange={handleChange}
        />
      </label>

      <label>
        {formErrors.password && <span classname="required">* </span>}Password
        <input
          value={formValues.password}
          name="password"
          type="password"
          onChange={handleChange}
        />
      </label>

      <label>
        Instructor Code
        <input
          value={formValues.instructorCode}
          name="instructorCode"
          type="text"
          onChange={handleChange}
        />
      </label>

      <Link to={`/dashboard`}>
        <button disabled={disabled}>Sign Up</button>
      </Link>

    </form>
  )
}

export default RegisterForm
