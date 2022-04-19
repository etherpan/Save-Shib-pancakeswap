import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const CoomingSoon = () => {
  const { t } = useTranslation()

  return (
    <Page>
      <StyledNotFound>
        <LogoIcon width="64px" mb="8px" />
        <Heading scale="xxl" mb="16px" style={{textAlign:"center"}}>Coming Soon</Heading>
        <Text mb="16px">{t('We are working on something big. We will be back soon.')}</Text>
        <Button as="a" href="/" scale="sm">
          {t('Back Home')}
        </Button>
      </StyledNotFound>
    </Page>
  )
}

export default CoomingSoon
