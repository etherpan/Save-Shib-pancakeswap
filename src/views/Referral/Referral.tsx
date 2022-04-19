import React from 'react'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import styled from 'styled-components'
import { BaseLayout } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import Hero from './components/Hero'
import TotalReferral from './components/TotalReferral'
import ReferralCommission from './components/ReferralCommission'
import ReferralLink from './components/ReferralLink'
import UnlockWalletCard from './components/UnlockWalletCard'

const Cards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 4;
    }
  }

  ${({ theme }) => theme.mediaQueries.md} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Referral: React.FC = () => {
  const { account } = useActiveWeb3React()

  return (
    <>
      <Hero />
      <Page>
        {!account ? (
          <UnlockWalletCard />
        ) : (
          <>
            <Cards>
              <TotalReferral />
              <ReferralCommission />
            </Cards>
            <ReferralLink />
          </>
        )}
      </Page>
    </>
  )
}

export default Referral
