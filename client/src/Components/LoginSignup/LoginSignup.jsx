import React from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
  return (
    <div class="container">
      <div className="header">
        <div className="text">
            Sign up
        </div>
      </div>
      <div className="inputs">
        <div className="input">
            <i class="fas fa-user"></i>
            <input type="text" placeholder = "Name"/>
        </div>
        <div className="input">
            <i class="fas fa-envelope"></i>
            <input type="email" placeholder = "Email ID" />
        </div>
        <div className="input">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder = "Password"/>
        </div>
      </div>
      <div className="forgot-password"><span>Lost password? Click Here!</span></div>
      <div className="submit-container">
        <div className="submit">Signup</div>
        <div className="login">Login</div>
      </div>
    </div>
  )
}

export default LoginSignup
    