import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import {Card, CardBody, Heading, Text } from '@pancakeswap/uikit'
import partition from 'lodash/partition'
import { useTranslation } from 'contexts/Localization'
import { useSelector } from 'react-redux'
import usePersistState from 'hooks/usePersistState'
import { useFetchPublicPoolsData, usePools, useFetchCakeVault, useCakeVault, useTotalSupply } from 'state/pools/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePollFarmsData } from 'state/farms/hooks'
// import { ViewMode } from './components/ToggleView/ToggleView'
import { State, Pool } from "../../../state/types"
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const TotalValueLockedCard = () => {

  useFetchPublicPoolsData()

  const { pools, userDataLoaded } = useSelector((state: State) => ({
    pools: state.pools.data,
    userDataLoaded: state.pools.userDataLoaded,
  }))

  const { t } = useTranslation()
  // const tvl = useTotalValue()
  // const tvl = fetchPoolsTotalStaking()
  console.log({pools})
   const tvl = useTotalSupply(pools)
  const val = tvl ? tvl.toNumber() : 0
  console.log({ tvl, val })

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading scale="xl" mb="40px">
            {t('Total Value Locked (TVL)')}
        </Heading>
        <>
          <CardValue value={val} prefix="$" decimals={2}/>
          <Text color="text" mt="40px">{t('Across all Farms and Pools')}</Text>
        </>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
