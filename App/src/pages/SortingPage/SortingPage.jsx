import React from 'react'
import { GradientWrapper } from '../../components/GradientWrapper/GradientWrapper'
import { Sorting } from '../../components/Sorting/Sorting'
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper'
import styles from './SortingPage.module.scss'
import { Outlet } from 'react-router-dom'

export const SortingPage = () => {
  return (
    <GradientWrapper>
      <ContentWrapper>
        <Outlet/>
      </ContentWrapper>
    </GradientWrapper>
  )
}
