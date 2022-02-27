import React from 'react'
import Button from './Button'
import InputField from './InputField'

const Form = () => {
  return (
    <div className="container">
      <form className='form'>
          <div>
              <h1>Login</h1>
              <div className='form-container'>
              <InputField type="email" name="email" placeholder="Email Address" />
              <InputField type="password" name="password" placeholder="Password" />
              </div>
              <Button color= 'white' text="Login" textColor="darkslategrey"/>
            
          </div>
          
      </form>
      </div>
  )
}

export default Form