import React from 'react'
import LoginLogo from '../../assets/images/Login.png'
import styles from './Login.module.scss'

export const Login = () => {
  return (
    <div className={styles.LoginLogo}>
        <img src={LoginLogo} alt="login" />
    </div>
  )
}
