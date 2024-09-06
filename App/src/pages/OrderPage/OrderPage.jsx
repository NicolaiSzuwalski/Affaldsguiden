import React from 'react'
import { GradientWrapper } from '../../components/GradientWrapper/GradientWrapper'
import { Order } from '../../components/Order/Order'
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper'

export const OrderPage = () => {
  return (
    <GradientWrapper>
      <ContentWrapper>
        <Order/>
      </ContentWrapper>
    </GradientWrapper>
  )
}
