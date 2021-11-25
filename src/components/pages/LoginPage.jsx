// Libraries
import React, { useState } from 'react'

// Components
import LoginForm from "./../forms/LoginForm/LoginForm"
import SignUpForm from "./../forms/RegisterForm/SignUp"

function LoginPage() {
  const [status, setStatus] = useState("login")

  return (
    <section>
      {status === "login" && <LoginForm />}
      {status === "signUp" && <SignUpForm />}
      <div>
        {status === "login" && <button onClick={() => { setStatus("login") }}>Sign Up</button>}
        {status === "signUp" && <button onClick={() => { setStatus("signUp") }}>Login</button>}
      </div>
    </section>
  )
}

export default LoginPage
