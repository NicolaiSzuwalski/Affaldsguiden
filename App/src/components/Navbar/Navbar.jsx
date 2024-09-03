import React from 'react'
import styles from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'


export const Navbar = () => {
  return (
    <nav className={styles.NavMain}>
        <ul>
            <li><NavLink to='/'>Forside</NavLink></li>
            <li><NavLink to='/Sorting'>Sorteringsguide</NavLink></li>
            <li><NavLink to='/Locations'>Genbrugsstationer</NavLink></li>
            <li><NavLink to='Articles'>Artikler</NavLink></li>
            <li><NavLink to='Order'>Bestil container</NavLink></li>

        </ul>
    </nav>
  )
}
