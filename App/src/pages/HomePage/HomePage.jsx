import React from 'react'
import { GradientWrapper } from '../../components/GradientWrapper/GradientWrapper'
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper'
import Buckets from '../../assets/images/Paintbuckets.png'
import styles from './HomePage.module.scss'
import { HomeCards } from '../../components/HomeCards/HomeCards'



export const HomePage = () => {
  return (
    <GradientWrapper>
      <ContentWrapper>
        <section className={styles.Home}>
          <img src={Buckets} alt="buckets" />
        </section>
        <HomeCards/>
      </ContentWrapper>
    </GradientWrapper>
  )
}
