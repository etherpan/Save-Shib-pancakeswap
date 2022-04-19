import React from 'react'
import { Heading, Flex, Text, Skeleton, ChartIcon, CommunityIcon, SwapIcon, TicketFillIcon } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'
import GradientLogo from '../GradientLogoSvg'

// Values fetched from bitQuery effective 13/8/21
const txCount = 44713126
const addressCount = 2607499

const Stats = () => {
  const { t } = useTranslation()
  const data = useGetStats()
  const { theme } = useTheme()

  const tvlString = data ? formatLocalisedCompactNumber(data.tvl) : '-'
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)

  const tvlText = t('And those users are now entrusting the platform with over $%tvl% in funds.', { tvl: tvlString })
  const [entrusting, inFunds] = tvlText.split(tvlString)

  const UsersCardData: IconCardData = {
    icon: <CommunityIcon color="secondary" width="36px" />,
  }

  const TradesCardData: IconCardData = {
    icon: <SwapIcon color="primary" width="36px" />,
  }

  const StakedCardData: IconCardData = {
    icon: <ChartIcon color="failure" width="36px" />,
  }

  const LotteryCardData: IconCardData = {
    icon: <TicketFillIcon color="secondary" width="36px" />,
  }

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <GradientLogo height="48px" width="48px" mb="24px" />
      <Heading textAlign="center" scale="xl" mb="28px">
        {t('Earn in Multiple Ways.')}
      </Heading>
      <Flex flexDirection={['column', null, null, 'row']}>
        <IconCard {...TradesCardData} borderColor="#ff0e32" color="primary" title="Farms" mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('Stake in your Favourite LP Farms')}
            bodyText={t('Earn NN Token by Staking in LP tokens Maximize your earning via Auto-compoundings')}
            highlightColor={theme.colors.primary}
          />
        </IconCard>
        <IconCard {...StakedCardData} borderColor="#ff0e32" color="failure" title="Pools"  mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('High earnings with Single asset staking')}
            bodyText={t('Stake NN Token to Earn NN Token with our Pools, High APR per Day, Week, Monthly and Yearly')}
            highlightColor={theme.colors.primary}
          />
        </IconCard>
        <IconCard {...LotteryCardData} borderColor="#ff0e32" color="secondary" title="Referral" mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('Earn $Notch from your friend stake')}
            bodyText={t('Enjoy our unique referral program and chance to earn a passive income of Pool earning')}
            highlightColor={theme.colors.failure}
          />
        </IconCard>
      </Flex>
    </Flex>
  )
}

export default Stats
