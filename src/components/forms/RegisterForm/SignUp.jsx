// Libraries
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import formSchema from '../../../schemas/formSchema'
import * as yup from 'yup'

const initialValues = {
  first_name: "",
  last_name: "",
  username: "",
  password: "",
  email: "",
  emailConfirm: "",
  instructorCode: ""
};

export default function SignUp() {
  const [formValues, setFormValues] = useState(initialValues)
  const [disabled, setDisabled] = useState(true)
  const [formErrors, setFormErrors] = useState(initialValues)

  const validate = (name, value) => {
    yup.reach(formSchema, name).validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] })
      })
  }

  const handleChange = (e) => {
    validate(e.target.name, e.target.value);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const registerPayload = {
      username: formValues.username,
      password: formValues.password,
      email: formValues.email,
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      instructor_auth: formValues.instructorCode
    }
    axios.post('https://anywhere-fitness-bwft5.herokuapp.com/api/auth/register', registerPayload)
      .then((res) => {
        window.localStorage.setItem('token', res.data.token);
      })
      .catch(err => {
        console.log(err.message);
      })
      .finally(() => {
        setFormValues(formValues)
      })
  };

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))

  }, [formValues])

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>

      <label>First Name:
        <input
          value={formValues.first_name}
          name="first_name"
          type="text"
          onChange={handleChange}
        />
      </label>


      <label>Last Name:
        <input
          value={formValues.last_name}
          name="last_name"
          type="text"
          onChange={handleChange}
        />
      </label>


      <label>Username:
        <input
          value={formValues.username}
          name="username"
          type="text"
          onChange={handleChange}
        />
      </label>


      <label>Password:
        <input
          value={formValues.password}
          name="password"
          type="password"
          onChange={handleChange}
        />
      </label>


      <label>E-mail:
        <input
          value={formValues.email}
          name="email"
          type="text"
          onChange={handleChange}
        />
      </label>

      <label>Confirm E-mail
        <input
          value={formValues.emailConfirm}
          name="emailConfirm"
          type="text"
          onChange={handleChange}
        />
      </label>

      <label>Instructor Code
        <input
          value={formValues.instructorCode}
          name="instructorCode"
          type="text"
          onChange={handleChange}
        />
      </label>

      <Link to={`/dashboard`}>
        <button className="btn" type="submit" disabled={disabled}>Sign Up</button>
      </Link>

    </form>
  )
}
