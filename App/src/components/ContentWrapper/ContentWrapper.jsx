import React from 'react'
import styles from './ContentWrapper.module.scss'

export const ContentWrapper = ({children}) => {
  return (
    <section className={styles.ContentWrapper}>{children}</section>
  )
}
