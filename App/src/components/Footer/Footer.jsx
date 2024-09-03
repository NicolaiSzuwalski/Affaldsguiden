import React from 'react'
import styles from './Footer.module.scss'
import footerBg from '../../assets/images/FooterBg.png'
import AppStores from '../../assets/images/AppStores.png'
import SocialMedias from '../../assets/images/SocialMedias.png'

export const Footer = () => {
  return (
    <footer className={styles.FooterMain}>
        <div className={styles.Address}>
            <h3>Affaldsguiden</h3>
            <p>Øster Uttrupvej 1A</p>
            <p>9000 Aalborg</p>
        </div>
        <div className={styles.AppStores}>
            <img src={AppStores} alt="AppStores" />
        </div>
        <div className={styles.Socials}>
            <img src={SocialMedias} alt="Socials" />
        </div>
    </footer>
  )
}
