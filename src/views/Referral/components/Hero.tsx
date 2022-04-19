import React from 'react'
import styled from 'styled-components'
import { Heading, Text, Flex } from '@pancakeswap/uikit'
import Container from 'components/Layout/Container'
import PageHeader from 'components/PageHeader'
import { useGetReferrate } from 'hooks/useTotalRefCommission'
import { useTranslation } from 'contexts/Localization'

const Hero = () => {

  const {t} = useTranslation()
  const commistionrate = useGetReferrate()


  return (
      <PageHeader>
        <Flex flexDirection="column" flex="1" alignSelf={['center', null, null, 'center']}>
          <Heading as="h1" scale="xxl" color="#0dcad8" mb="24px">
            {t('Referral')}
          </Heading>
          <Heading scale="md" color="text">
            {t(`Share the referral link below to invite your friends and earn ${commistionrate.toString()}% of your friend's earnings FOREVER!`)}
          </Heading>
        </Flex>
      </PageHeader>
  )
}

export default Hero
