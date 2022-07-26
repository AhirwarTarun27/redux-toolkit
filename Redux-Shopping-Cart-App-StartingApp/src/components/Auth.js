import React from 'react';
import { useDispatch } from 'react-redux';
import authStore, { authActions } from '../store/auth-store';

import './Auth.css';

const Auth = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.setIsLoggedIn());
  };

  return (
    <div className='container'>
      <h1>Login</h1>{' '}
      <form>
        <label htmlFor='id'>Id</label>
        <input type='text' name='id' id='id' />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />
        <button onClick={handleSubmit} className='login-btn' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
