import React from 'react'
import styles from './Main.module.scss'
import { GradientWrapper } from '../GradientWrapper/GradientWrapper'

export const Main = ({children}) => {
  return (
    <main className={styles.MainContainer}>
      {children}
      </main>
  )
}
