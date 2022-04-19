import React from 'react'
import styled from 'styled-components'
import { Heading, BaseLayout , Image, Flex } from '@pancakeswap/uikit'
import Cookies from 'universal-cookie';
import { useQueryParam, StringParam } from 'use-query-params';
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'
// import Hero from './components/Hero'
import { isAddress } from '../../utils/web3'
import rot13 from '../../utils/encode'
import FarmStakingCard from './components/FarmStakingCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import EarnuptoFarm from './components/EarnuptoFarm'
import EarnuptoPool from './components/EarnuptoPool'



const Hero = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 36px;
  text-align: center;
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`


const Home: React.FC = () => {

  const {t} = useTranslation()
  const cookies = new Cookies();
  const [ref, setNum] = useQueryParam('ref', StringParam);

  if(ref) {
    if(isAddress(rot13(ref))) {
      cookies.set("ref", ref)
    }
  }

  return (
    <>
    <Page>
      <Hero>
        <Flex justifyContent="center">
          <Image src='/logo.png' alt='logo' width={100} height={100} mr="10px"/>
          {/* <Image src='/images/hero.png' alt='logo' width={100} height={100}  /> */}
        </Flex>
        <Heading mt="25px" size="md" color="#fff">{t('A product of SAVESHIB')}</Heading>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard/>
          {/* <EarnuptoFarm/>
          <EarnuptoPool/> */}
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
    </>
  )
}

export default Home
