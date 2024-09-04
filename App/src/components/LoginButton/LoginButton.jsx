import React from 'react'
import LoginLogo from '../../assets/images/Login.png'
import styles from './LoginButton.module.scss'

export const LoginButton = () => {
  return (
    <div className={styles.LoginLogo}>
        <img src={LoginLogo} alt="login" />
    </div>
  )
}
