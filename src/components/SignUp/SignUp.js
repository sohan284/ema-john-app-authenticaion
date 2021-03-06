import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const SignUp = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error,setError] = useState('');
    const navigate = useNavigate()


    const [createUserWithEmailAndPassword,user]= useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event =>{
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value)
    }
    if(user){
        navigate('/');

    }
    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Password did not match');
            return;
        }
        if(password.length < 6 ){
            setError('password must be at least 6 characters');
            return;
        }
        createUserWithEmailAndPassword(email,password);

    }
    return (
        <div className='form-container'>
        <form action=''>
        <div>
        <h1 className='form-title'>Sign Up</h1>
         <div className='input-group'>
             <label htmlFor="Email">Email</label>
             <input onBlur={handleEmailBlur} type="email" name="" id="" placeholder='Your Email' required />
         </div>
         <div className='input-group'>
             <label htmlFor="password">Password</label>
             <input onBlur={handlePasswordBlur} type="password" name="" id="" placeholder='Your password' required/>
         </div>
         <div className='input-group'>
             <label htmlFor="password">Confirm Password</label>
             <input onBlur={handleConfirmPasswordBlur} type="password" name="" id="" placeholder='Confirm password' required/>
         </div>
         <p style={{color:'red'}}><small>{error}</small></p>
         <input onClick={handleCreateUser} className='form-submit' type="submit" value="Sign Up" />
        </div>
        <p>
            Already have an account? <Link className='form-link' to='/login'>Login</Link>
            </p>
        </form>
        
     </div>
    );
};

export default SignUp;