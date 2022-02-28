import React from 'react'
import Button from './Button'
import InputField from './InputField'
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {

  let navigate = useNavigate();

  return (
    <div className="container">
      <form className='form'>
        <div>
          <h1>Login</h1>
          <div className='form-container'>
            <InputField
              type="email"
              name="email"
              placeholder="Email Address" />
            <InputField
              type="password"
              name="password"
              placeholder="Password" />
          </div>
          <Button
            color='white'
            text="Login"
            textColor="darkslategrey"
            variant="contained"
            onClick={() => {
              navigate('/profile');
            }} />
          <Button
          textColor="white"
          variant="text"
          text="Register"
          color="transparent"
          onClick={() => {
            navigate('/register');
          }} />
          

        </div>

      </form>
    </div>
  )
}

export default LoginForm