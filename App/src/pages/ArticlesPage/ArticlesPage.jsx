import React from 'react'
import { GradientWrapper } from '../../components/GradientWrapper/GradientWrapper'
import { Articles } from '../../components/Articles/Articles'
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper'

export const ArticlesPage = () => {
  return (
    <GradientWrapper>
      <ContentWrapper>
        <Articles></Articles>
      </ContentWrapper>
    </GradientWrapper>
  )
}
