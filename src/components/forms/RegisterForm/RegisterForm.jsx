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
  const [submitDisabled, setSubmitDisabled] = useState(true)
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
    registerSchema.isValid(formValues).then(valid => setSubmitDisabled(!valid))
  }, [formValues])

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form-label">
        <div className="form-label-text">
          <span className="required">*</span>
          <span>First Name</span>
        </div>
        <input
          value={formValues.first_name}
          className="form-input"
          name="first_name"
          type="text"
          onChange={handleChange}
        />
      </label>

      <label className="form-label">
        <div className="form-label-text">
          <span className="required">*</span>
          <span>Last Name</span>
        </div>
        <input
          value={formValues.last_name}
          className="form-input"
          name="last_name"
          type="text"
          onChange={handleChange}
        />
      </label>

      <label className="form-label">
        <div className="form-label-text">
          <span className="required">*</span>
          <span>Username</span>
        </div>
        <input
          value={formValues.username}
          className="form-input"
          name="username"
          type="text"
          onChange={handleChange}
        />
      </label>

      <label className="form-label">
        <div className="form-label-text">
          <span className="required">*</span>
          <span>Email</span>
        </div>
        <input
          value={formValues.email}
          className="form-input"
          name="email"
          type="email"
          onChange={handleChange}
        />
      </label>

      <label className="form-label">
        <div className="form-label-text">
          <span className="required">*</span>
          <span>Password</span>
        </div>
        <input
          value={formValues.password}
          className="form-input"
          name="password"
          type="password"
          onChange={handleChange}
        />
      </label>

      <label className="form-label">
        <div className="form-label-text">
          <span>Instructor Code</span>
        </div>
        <input
          value={formValues.instructorCode}
          className="form-input"
          name="instructorCode"
          type="text"
          onChange={handleChange}
        />
      </label>

      <Link to={`/dashboard`}>
        <button
          className={
            submitDisabled === false
              ? "button activated-submit-button"
              : "button"
          }
          disabled={submitDisabled}
        >
          Register
        </button>
      </Link>

    </form>
  )
}

export default RegisterForm
