import React from 'react'
import { Card, CardBody, Text, Heading } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { useFarms, usePriceCakeBusd } from 'state/farms/hooks'
import { getCakeAddress } from 'utils/addressHelpers'
import { useTranslation } from 'contexts/Localization'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const totalMinted = totalSupply ? getBalanceNumber(totalSupply) : 0
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  const NNPriceBusd = usePriceCakeBusd()
  const mcap = NNPriceBusd.isNaN() ? 0 : getBalanceNumber(NNPriceBusd.times(cakeSupply).times(10 ** 18))
  const farms = useFarms()
  const rewardPerBlock = farms && farms.data ? farms.data[0].saveshibperblock : 0

  
  return (
    <StyledCakeStats>
      <CardBody>
        <Heading scale="xl" mb="24px">
          {t('SHB Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{t('Market Cap')}</Text>
          <CardValue fontSize="14px" value={mcap} decimals={2} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">{t('Total Minted')}</Text>
          {totalSupply && <CardValue fontSize="14px" value={totalMinted} decimals={0} />}  
        </Row>
        <Row>
          <Text fontSize="14px">{t('Total Burned')}</Text>
          <CardValue fontSize="14px" value={burnedBalance} decimals={0} />    
        </Row>
        <Row>
          <Text fontSize="14px">{t('Circulating Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} decimals={0} />}       
        </Row>
        <Row>
          <Text fontSize="14px">{t('Rewards SHB/block')}</Text>
          <Text fontSize="14px">{rewardPerBlock}</Text>
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
