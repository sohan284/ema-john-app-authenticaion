import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { useState } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const navigate= useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    if(user){
        navigate('/shop')

    }
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    }
    return (
        <div className='form-container'>
           <div>
           <form onSubmit={handleUserSignIn}>
           <h1 className='form-title'>Log In</h1>
            <div className='input-group'>
                <label htmlFor="Email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name="" id="" placeholder='Your Email' required/>
            </div>
            <div className='input-group'>
                <label htmlFor="password">Password</label>
                <input onBlur={handlePasswordBlur} type="password" name="" id="" placeholder='Your password' required/>
            </div>
            <p style={{color:'red'}}>{error?.message}</p>
            <input className='form-submit' type="submit" value="Login" />
           </form>
           <p>
               New to Ema-John? <Link className='form-link' to='/signup'>Create an account</Link>
               </p>
           </div>
           
        </div>
    );
};

export default Login;