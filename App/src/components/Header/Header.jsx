import React from 'react'
import styles from './Header.module.scss'
import HeaderLogo from '../../assets/images/Logo.png'
import { LoginButton } from '../LoginButton/LoginButton'
import { Navbar } from '../Navbar/Navbar'
import { NavLink, Link } from 'react-router-dom'
import { Footer } from '../Footer/Footer'


export const Header = () => {
  return (
        <header className={styles.Header}>
            <Link to='/'>
            <img src={HeaderLogo} alt="Logo" />
            </Link>
            <Link to='/Login'>
            <LoginButton/>
            </Link>
        </header>
  )
}
