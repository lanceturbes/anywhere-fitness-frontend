import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import "../styles/signUp.css";
import formSchema from '../validation/formSchema';
import * as yup from 'yup';

const initialValues = {
    first_name:"",
    last_name:"",
    username:"",
    password:"",
    email:"",
    emailConfirm:""
};

export default function SignUp({userSubmit}) {
    const [formValues, setFormValues] = useState(initialValues);
    const [disabled,setDisabled] = useState(true);
    const [formErrors,setFormErrors] =useState(initialValues)
    
    const validate = (name,value) => {
        yup.reach(formSchema,name).validate(value)
          .then(() => setFormErrors({...formErrors,[name]:''}))
          .catch(err => {
            setFormErrors({...formErrors,[name]:err.errors[0]})
          })
      }
    
    const handleChange = (e) => {
        validate(e.target.name,e.target.value);
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
        console.log(formValues)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://anywhere-fitness-bwft5.herokuapp.com/api/auth/register', formValues)
        .then((res) => {
            window.localStorage.setItem('token', res.data.token);
            console.log(res.data)
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
        
    },[formValues])
    
    return (
        <>
            <div id="card-content">
                <form id="signUp-form" onSubmit={handleSubmit}>
                    <div className="login-form-header">
                        <h1>Sign Up</h1>
                    </div>

                    <div className="login-input-container">
                        <div className='form-inputs' id='login-inputs'>
                            <label>First Name:</label>
                            <input
                                value={formValues.first_name}
                                name="first_name"
                                type="text"
                                onChange={handleChange}
                            />
                            <div className="errors">{formErrors.first_name}</div>

                            <label>Last Name:</label>
                            <input
                                value={formValues.last_name}
                                name="last_name"
                                type="text"
                                onChange={handleChange}
                            />
                            <div className="errors">{formErrors.last_name}</div>
                            <label>Username:</label>
                            <input
                                value={formValues.username}
                                name="username"
                                type="text"
                                onChange={handleChange}
                            />
                            <div className="errors">{formErrors.username}</div>

                            <label>Password:</label>
                            <input
                                value={formValues.password}
                                name="password"
                                type="password"
                                onChange={handleChange}
                            />
                            <div className="errors">{formErrors.password}</div>
                            <label>E-mail:</label>
                            <input
                                value={formValues.email}
                                name="email"
                                type="text"
                                onChange={handleChange}
                            />
                            <div className="errors">{formErrors.email}</div>
                            <label>Confirm E-mail:</label>
                            <input
                                value={formValues.emailConfirm}
                                name="emailConfirm"
                                type="text"
                                onChange={handleChange}
                            />
                            <div className="errors">{formErrors.emailConfirm}</div>
                        </div>

                        
                        <Link to={`/users`}>
                        <button id="signUp-button" type ="submit" onClick={() => userSubmit()} disabled={disabled}>Sign Up</button>
                        </Link>
                        
                    </div>
                </form>
            </div>
        </>
    )
}