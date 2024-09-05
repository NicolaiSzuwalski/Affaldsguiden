import React from 'react'
import { GradientWrapper } from '../../components/GradientWrapper/GradientWrapper'
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper'
import { Outlet } from 'react-router-dom'

export const ArticlesPage = () => {
  return (
    <GradientWrapper>
      <ContentWrapper>
        <Outlet/>
      </ContentWrapper>
    </GradientWrapper>
  )
}
