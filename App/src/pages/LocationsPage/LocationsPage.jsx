import React from 'react'
import { GradientWrapper } from '../../components/GradientWrapper/GradientWrapper'
import { Sites } from '../../components/Sites/Sites'
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper'

export const LocationsPage = () => {
  return (
    <GradientWrapper>
      <ContentWrapper>
        <Sites/>
      </ContentWrapper>
    </GradientWrapper>
  )
}
