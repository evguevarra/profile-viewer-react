import React from 'react'
import Button from './Button'
import InputField from './InputField'
import { Link, useNavigate } from 'react-router-dom';

const RegisterForm = () => {

    let navigate = useNavigate();

    return (
        <div className="container">
            <form className='form'>
                <div>
                    <h1>Register</h1>
                    <div className='form-container'>
                        <InputField
                            type="text"
                            name="fullname"
                            placeholder="Full name" />
                        <InputField
                            type="email"
                            name="email"
                            placeholder="Email Address" />
                        <InputField
                            type="password"
                            name="password"
                            placeholder="Password" />
                        <InputField
                            type="password"
                            name="password"
                            placeholder="Confirm Password" />
                    </div>
                    <Button
                        color='white'
                        text="Register"
                        textColor="darkslategrey"
                        variant="contained"
                        onClick={() => {
                            alert("User Registered! Go to Login Page to Login");
                        }} />
                    <Button
                        textColor="white"
                        variant="text"
                        text="Login"
                        color="transparent"
                        onClick={() => {
                            navigate('/');
                        }} />


                </div>

            </form>
        </div>
    )
}

export default RegisterForm