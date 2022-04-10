import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
           <form action=''>
           <div>
           <h1 className='form-title'>Log In</h1>
            <div className='input-group'>
                <label htmlFor="Email">Email</label>
                <input type="email" name="" id="" placeholder='Your Email' required/>
            </div>
            <div className='input-group'>
                <label htmlFor="password">Password</label>
                <input type="password" name="" id="" placeholder='Your password' required/>
            </div>
            <input className='form-submit' type="submit" value="Login" />
           </div>
           <p>
               New to Ema-John? <Link className='form-link' to='/signup'>Create an account</Link>
               </p>
           </form>
           
        </div>
    );
};

export default Login;