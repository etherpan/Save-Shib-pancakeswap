import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button, Flex } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import useTokenBalance from 'hooks/useTokenBalance'
import useFarmsWithBalance from 'views/Home/hooks/useFarmsWithBalance'
import { getCakeAddress } from 'utils/addressHelpers'
import { useTranslation } from 'contexts/Localization'
import useToast from 'hooks/useToast'
import { useMasterchef } from 'hooks/useContract'
import { harvestFarm } from 'utils/calls'
import UnlockButton from 'components/UnlockButton'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'

const StyledFarmStakingCard = styled(Card)`
  // background-image: url('/images/home/2a.png');
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWeb3React()
  const {t} = useTranslation()
  const xhashBalance = useTokenBalance(getCakeAddress())
  const xhashUserBalance = xhashBalance.balance ? getBalanceNumber(xhashBalance.balance) : 0
  const xhashPrice = usePriceCakeBusd().toNumber()

  const registerToken = async (tokenAddress: string, tokenSymbol: string, tokenDecimals: number) => {
    const tokenAdded = await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
          image: `https://saveshib.com/logo.png`,
        },
      },
    })
  
    return tokenAdded
  }

  const { toastSuccess, toastError } = useToast()
  const { farmsWithStakedBalance, earningsSum: farmEarningsSum } = useFarmsWithBalance()
  const numFarmsToCollect = farmsWithStakedBalance.filter((value) => value.pid !== 0).length
  const masterChefContract = useMasterchef()
  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    // eslint-disable-next-line no-restricted-syntax
    for (const farmWithBalance of farmsWithStakedBalance) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await harvestFarm(masterChefContract, farmWithBalance.pid)
        toastSuccess(
          `${t('Harvested')}!`,
          t('Your %symbol% earnings have been sent to your wallet!', { symbol: 'SHB' }),
        )
      } catch (error) {
        toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      }
    }
    setPendingTx(false)
  }, [farmsWithStakedBalance, masterChefContract, toastSuccess, toastError, t])

  
  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading scale="xl" mb="24px">
          {t('Farms & Staking')}
        </Heading>
        <Flex style={{verticalAlign: 'center'}}>
        <CardImage src="/logo.png" alt="cake logo" width={64} height={64} />
          <Button 
            variant="text"
            style={{height: 32, marginTop: 20, marginLeft: 16, backgroundColor: '#d9d7f2'}}
            onClick={() => registerToken('0x5c14218cb85b77056a6735900522ff5535ab252B', 'SHB', 18)}>
            +
            <img src='/images/metamask.png' alt='MetaMask Logo' style={{width: 16, height: 16, marginLeft: 4}}/>
          </Button>
        </Flex>
        <Block>
          <Label>{t('SHB to Harvest')}</Label>
          <CakeHarvestBalance earningsSum={farmEarningsSum}/>
          <Label>~${(xhashPrice * farmEarningsSum).toFixed(2)}</Label>
        </Block>
        <Block>
          <Label >{t('SHB in Wallet')}</Label>
          <CakeWalletBalance xhashBalance={xhashUserBalance} />
          <Label>~${(xhashPrice * xhashUserBalance).toFixed(2)}</Label>
        </Block>

      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
