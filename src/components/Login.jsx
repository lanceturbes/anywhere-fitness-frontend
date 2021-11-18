import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'

import userSchema from '../validation/userSchema'

const initialValues = {
  username: "",
  password: ""
}

export default function Login() {
  const navigate = useNavigate()

  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState(initialValues)
  const [loginError, setLoginError] = useState("")
  const [disabled, setDisabled] = useState(true)

  const handleChange = (e) => {
    validate(e.target.name, e.target.value)
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const validate = (name, value) => {
    yup.reach(userSchema, name).validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] })
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://anywhere-fitness-bwft5.herokuapp.com/api/auth/login', formValues)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem("user_id", res.data.user.id)
        navigate("/dashboard")
      })
      .catch(err => {
        setLoginError("Invalid Login! Please try again.")
      })
  }

  useEffect(() => {
    userSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <>
      <div id="card-content">
        <form id="login-form" className="form" onSubmit={handleSubmit}>
          <div className="login-form-header">
            <h1>Login to view your classes.</h1>
            {loginError && <p>{loginError}</p>}
          </div>

          <div className="form-container">
            <div className='input-container' id='login-inputs'>
              <label>
                Username:
                <input
                  value={formValues.username}
                  name="username"
                  type="text"
                  onChange={handleChange}
                />
              </label>
              <div className="errors">{formErrors.username}</div>

              <label>
                Password:
                <input
                  value={formValues.password}
                  name="password"
                  type="password"
                  onChange={handleChange}
                />
              </label>
              <div className="errors">{formErrors.password}</div>
            </div>

            <button className="btn" type="submit" disabled={disabled}>Login</button>

            <Link to={`/signup`}>Don't have an account yet?</Link>
          </div>
        </form>
      </div>
    </>
  )
}
