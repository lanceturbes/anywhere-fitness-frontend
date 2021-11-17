import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'; 
import axios from 'axios';
import * as yup from 'yup';
import userSchema from '../validation/userSchema';

const initialValues = {
    username:"",
    password:""
};

export default function Login() {
    const [formValues, setFormValues] = useState(initialValues);
    const [userError,setUserError] = useState(initialValues);
    const [disabled,setDisabled] = useState(true);

    const handleChange = (e) => {
        validate(e.target.name,e.target.value)
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };
    const validate = (name,value) => {
        yup.reach(userSchema,name).validate(value)
            .then(() => setUserError({...userError,[name]:''}))
            .catch(err =>{
                setUserError({...userError,[name]:err.errors[0]})
            })
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post ('https://anywhere-fitness-bwft5.herokuapp.com/api/auth/login', formValues)
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
    useEffect(()=>{
        userSchema.isValid(formValues).then(valid => setDisabled(!valid))
 
    },[formValues])
    

    return (
        <>
            <div id="card-content">
                <form id="login-form" className="form" onSubmit={handleSubmit}>
                    <div className="login-form-header">
                        <h1>Login to view your classes.</h1>
                    </div>

                    <div className="form-container">
                        <div className='input-container' id='login-inputs'>
                            <label>Username:
                            <input
                                value={formValues.username}
                                name="username"
                                type="text"
                                onChange={handleChange}
                            /></label>
                            <div className="errors">{userError.username}</div>

                            <label>Password:
                            <input
                                value={formValues.password}
                                name="password"
                                type="password"
                                onChange={handleChange}
                            /></label>
                            <div className="errors">{userError.password}</div>
                        </div>

                        
                        <Link to={`/dashboard`}>

                        <button className="btn" type="submit" disabled={disabled} >Login</button>
                        </Link>

                        <Link to={`/signup`}>
                        <p>Don't have an account yet?</p></Link>
                    </div>
                </form>
            </div>
        </>
    )
}