import React, { useState } from 'react';
import axios from 'axios';
import "../styles/signUp.css"

const initialValues = {
    first_name:"",
    last_name:"",
    username:"",
    password:"",
    email:"",
    emailConfirm:""
};

export default function SignUp() {
    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://anywhere-fitness-bwft5.herokuapp.com/api/auth/register', formValues)
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
                            <label>Last Name:</label>
                            <input
                                value={formValues.last_name}
                                name="last_name"
                                type="text"
                                onChange={handleChange}
                            />
                            <label>Username:</label>
                            <input
                                value={formValues.username}
                                name="username"
                                type="text"
                                onChange={handleChange}
                            />

                            <label>Password:</label>
                            <input
                                value={formValues.password}
                                name="password"
                                type="password"
                                onChange={handleChange}
                            />
                            <label>E-mail:</label>
                            <input
                                value={formValues.email}
                                name="email"
                                type="text"
                                onChange={handleChange}
                            />
                            <label>Confirm E-mail:</label>
                            <input
                                value={formValues.emailConfirm}
                                name="emailConfirm"
                                type="text"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="errors">

                        </div>

                        <button id="signUp-button">Sign Up</button>
                    </div>
                </form>
            </div>
        </>
    )
}