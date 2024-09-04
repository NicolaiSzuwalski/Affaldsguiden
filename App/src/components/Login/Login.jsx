import React from 'react'
import styles from './Login.module.scss'
import { useAuth } from '../../providers/AuthProvider'
import { useSupabase } from '../../providers/SupabaseProvider'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const Login = () => {

const { supabase } = useSupabase();
const { loginData, setLoginData } = useAuth();
const navigate = useNavigate();
const { register, handleSubmit, formState: { errors},} = useForm();
const [errorMessage, setErrorMessage ] = useState('');

const LoggedIn = () => {
  return(
    alert('Successfully logged in')
  )
}

const handleLogin = async ({email, password}) => {
  const{ data, error } = await supabase.auth.signInWithPassword({
    email, 
    password 
  })

if(error){
  console.error('Error logging in : ', error)
  setErrorMessage('Your login credentials are wrong');
}else{
  console.log('successfully logged in', data)
  LoggedIn();
  setErrorMessage('');
  setLoginData(data)
  setTimeout(() =>{
    navigate('/')
  }, 3000)
}

};
  return (
    <section className={styles.loginContainer}>
        
      {!loginData || !loginData.user ? (
        <form noValidate onSubmit={handleSubmit(handleLogin)}>
        <h1>Login</h1>
          <input type="email" id='email' placeholder='Type in your email'
          {...register('email', {required: true})}
          />
          {errors.email && <span>This field is required</span>}
          <input type="password" id='password' placeholder='Type in your password' 
          {...register('password', {required: true})}
          />
          {errors.password && <span>This field is required</span>}
          {errorMessage && <span>{errorMessage}</span>}
          <button type='submit'>Login</button>  
          <p>Opret ny bruger</p>
          <p>Glemt password?</p>
        </form>
      ):null}
    </section>
  )
}